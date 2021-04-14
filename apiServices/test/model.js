let mongoose = require('mongoose');
let Schema = mongoose.Schema;
const functions = require('./utils/functions');
const DIMENSIONS  = require('./utils/data').DIMENSIONS;

let schema = new Schema({
    owner: { type: mongoose.Types.ObjectId, ref: 'User' },
    alias: { type: String, trim: true },
    age: Number,
    sex: String,
    grade: String,
    institution: String,
    answers: [{
        question: String,
        reverse: Boolean,
        selected: Number,
        dimension: String
    }],
    results: [{
        dimension: String,
        score: Number,
        scale: String,
    }]
},
    { timestamps: true }
);

schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});

schema.post("save", async function (doc, next) {
    if (doc.results.length > 0) return next();
    let results = [];
    for(let dimension of DIMENSIONS) {
        results.push({
            dimension: dimension,
            score: functions.calculateScore(dimension, doc.answers),
            scale: functions.calculateScale(dimension, doc.answers)
        });
    }
    try {
        doc.results = results;
        await doc.save();
    } catch( err ) {
        let error = new Error(err.message || 'Error al guardar');
        next(error)
    }
})

schema.pre("deleteOne", { document: true, query: false }, async function (next) {
    try {
        const User = require('../user/model');
        let user = await User.findById(this.owner);
        let index = user.tests.findIndex(e => String(e) === String(this._id));
        user.tests.splice(index, 1);
        await user.save();
    } catch (err) {
        console.log(err)
        let error = new Error({message: err.message || 'Error al guardar'});
        next(error)
    }
})

module.exports = mongoose.model('Test', schema)