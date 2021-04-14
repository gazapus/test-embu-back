function calculateScore(dimension, answers) {
    let reverse = [5, 4, 3, 2, 1];
    let puntaje = 0;
    for (let i = 0; i < answers.length; i++) {
        if (answers[i].dimension === dimension) {
            if (answers[i].reverse) {
                puntaje += reverse[answers[i].selected - 1];
            } else {
                puntaje += answers[i].selected;
            }
        }
    }
    return puntaje;
}

function calculateScale(dimension, answers) {
    let min = answers.filter(e => e.dimension === dimension).length;
    let max = min * 5;
    let difference = (max - min) / 3;
    let middleTop =  Math.floor(max - difference);
    let middleBottom =  Math.floor(middleTop - 1 - difference);
    let score = calculateScore(dimension, answers);
    let scale;
    if (score >= middleTop) {
        scale = "Alto";
    } else if (score < middleTop && score >= middleBottom) {
        scale = "Medio";
    } else {
        scale = "Bajo"
    }
    return scale;
}

const functions = {
    calculateScore,
    calculateScale,
}

module.exports = functions;