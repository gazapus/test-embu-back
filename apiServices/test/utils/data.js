const DIMENSIONS = [
    'Sobreprotección',
    'Comprensión y apoyo',
    'Castigo',
    'Presión hacia el logro',
    'Rechazo',
    'Reprobación'
];

const questions = [
    {
        question: '¿Tienes la impresión de que tus padres ponen impedimentos a todo lo que haces?',
        dimension: DIMENSIONS[0],
        reverse: false
    },
    {
        question: '¿Te han demostrado con palabras y gestos que te quieren?',
        dimension: DIMENSIONS[1],
        reverse: false
    },
    {
        question: '¿Eres mimado por tus padres en comparación con tu(s) hermano(s)?',
        dimension: DIMENSIONS[0],
        reverse: false
    },
    {
        question: '¿Te sientes querido por tus padres?',
        dimension: DIMENSIONS[1],
        reverse: false
    },
    {
        question: '¿Dejan tus padres de dirigirte la palabra durante mucho tiempo si haces algo que les molesta?',
        dimension: DIMENSIONS[5],
        reverse: false
    },
    {
        question: '¿Te castigan tus padres incluso por cometer pequeñas faltas?',
        dimension: DIMENSIONS[2],
        reverse: false
    },
    {
        question: '¿Tratan tus padres de influirte para que seas una persona importante?',
        dimension: DIMENSIONS[3],
        reverse: false
    },
    {
        question: '¿Te sientes decepcionado en alguna ocasión porque tus padres no te conceden algo que tú deseas conseguir?',
        dimension: DIMENSIONS[5],
        reverse: false
    },
    {
        question: '¿Crees que tu padre o tu madre desean que tú seas diferente en algún aspecto?',
        dimension: DIMENSIONS[3],
        reverse: false
    },
    {
        question: '¿Te permiten tener cosas que no pueden tener tus hermanos?',
        dimension: DIMENSIONS[4],
        reverse: true
    },
    {
        question: '¿Piensas que tus padres te castigan merecidamente?',
        dimension: DIMENSIONS[4],
        reverse: true
    },
    {
        question: '¿Crees que tu padre o tu madre son demasiado severos contigo?',
        dimension: DIMENSIONS[0],
        reverse: false
    },
    {
        question: 'Si tú haces una trastada. ¿Podrías remediar la situación pidiendo perdón a tus padres?',
        dimension: DIMENSIONS[1],
        reverse: false
    },
    {
        question: '¿Quieren siempre tus padres decidir cómo debes vestirte o qué aspecto debes tener?',
        dimension: DIMENSIONS[3],
        reverse: false
    },
    {
        question: '¿Te mienten tus padres?',
        dimension: DIMENSIONS[5],
        reverse: false
    },
    {
        question: '¿Tienes la sensación de que tus padres te quieren menos que a tus hermanos?',
        dimension: DIMENSIONS[4],
        reverse: false
    },
    {
        question: '¿Te tratan tus padres injustamente en comparación a como tratan a tus hermanos?',
        dimension: DIMENSIONS[4],
        reverse: false
    },
    {
        question: '¿Tus padres te prohíben hacer cosas que otros chicos de tu edad pueden hacer, por miedo a que te suceda algo?',
        dimension: DIMENSIONS[0],
        reverse: false
    },
    {
        question: '¿Te riñen o te pegan tus padres en presencia de otras personas?',
        dimension: DIMENSIONS[2],
        reverse: false
    },
    {
        question: '¿Se preocupan tus padres de saber qué haces cuando no estás en casa?',
        dimension: DIMENSIONS[0],
        reverse: false
    },
    {
        question: 'Si las cosas te van mal, ¿tienes la sensación de que tus padres tratan de comprenderte y animarte?',
        dimension: DIMENSIONS[1],
        reverse: false
    },
    {
        question: '¿Se preocupan excesivamente tus padres por tu salud?',
        dimension: DIMENSIONS[1],
        reverse: false
    },
    {
        question: '¿Te imponen más castigos corporales de los que mereces?',
        dimension: DIMENSIONS[2],
        reverse: false
    },
    {
        question: 'Se enfadan tus padres si no ayudas en las labores de la casa tanto como ellos desean?',
        dimension: DIMENSIONS[5],
        reverse: false
    },
    {
        question: 'Si a tus padres les parece mal lo que haces, ¿se entristecen hasta el punto de que te sientes culpable por lo que has hecho?',
        dimension: DIMENSIONS[3],
        reverse: false
    },
    {
        question: '¿Te permiten tus padres tener las mismas cosas que tus amigos?',
        dimension: DIMENSIONS[0],
        reverse: true
    },
    {
        question: '¿Tienes la sensación de que es difícil comunicarse con tus padres?',
        dimension: DIMENSIONS[1],
        reverse: true
    },
    {
        question: '¿Cuentan tus padres algo que tú has dicho o hecho, delante de otras personas, de forma que tú te sientas avergonzado?',
        dimension: DIMENSIONS[2],
        reverse: false
    },
    {
        question: '¿Sientes que tus padres te quieren menos que al resto de tus hermanos?',
        dimension: DIMENSIONS[4],
        reverse: false
    },
    {
        question: '¿Ocurre que tus padres no quieren concederte cosas que tú realmente necesitas?',
        dimension: DIMENSIONS[2],
        reverse: false
    },
    {
        question: '¿Muestran tus padres interés en que saques buenas notas?',
        dimension: DIMENSIONS[3],
        reverse: false
    },
    {
        question: '¿Sientes que tus padres te ayudan cuando te enfrentas a una tarea difícil?',
        dimension: DIMENSIONS[1],
        reverse: false
    },
    {
        question: '¿Te sientes tratado como la «oveja negra» de la familia?',
        dimension: DIMENSIONS[1],
        reverse: true
    },
    {
        question: '¿Desean tus padres que te parezcas a alguna otra persona?',
        dimension: DIMENSIONS[3],
        reverse: false
    },
    {
        question: 'Ocurre que tus padres te digan: «Tú que ya eres tan mayor no deberías comportarte de esa forma»?',
        dimension: DIMENSIONS[3],
        reverse: false
    },
    {
        question: '¿Critican tus padres a tus amigos(as)  más íntimos(as)?',
        dimension: DIMENSIONS[5],
        reverse: false
    },
    {
        question: 'Cuando tus padres están tristes, ¿tienes la impresión de que ellos piensan que tú eres el causante de su estado?',
        dimension: DIMENSIONS[5],
        reverse: false
    },
    {
        question: '¿Intentan tus padres estimularte para que seas el mejor?',
        dimension: DIMENSIONS[3],
        reverse: false
    },
    {
        question: '¿Te demuestran tus padres que están satisfechos contigo?',
        dimension: DIMENSIONS[1],
        reverse: false
    },
    {
        question: '¿Tienes la sensación de que tus padres confían en ti de tal forma que te permiten actuar bajo tu propia responsabilidad?',
        dimension: DIMENSIONS[1],
        reverse: false
    },
    {
        question: '¿Crees que tus padres respetan tus opiniones?',
        dimension: DIMENSIONS[1],
        reverse: false
    },
    {
        question: 'Si tú tienes pequeños secretos, ¿quieren tus padres que hables de estos secretos con ellos?',
        dimension: DIMENSIONS[3],
        reverse: false
    },
    {
        question: '¿Tienes la sensación de que tus padres quieren estar a tu lado?',
        dimension: DIMENSIONS[1],
        reverse: false
    },
    {
        question: '¿Crees que tus padres son algo tacaños y cascarrabias contigo?',
        dimension: DIMENSIONS[5],
        reverse: false
    },
    {
        question: '¿Utilizan tus padres expresiones como: «Si haces eso, voy a ponerme muy triste»?',
        dimension: DIMENSIONS[2],
        reverse: false
    },
    {
        question: 'Al volver a casa, ¿tienes que dar explicaciones a tus padres de lo que has estado haciendo?',
        dimension: DIMENSIONS[0],
        reverse: false
    },
    {
        question: `¿Crees que tus padres intentan que tu adolescencia sea estimulante, interesante y
        atractiva (por ejemplo, dándote a leer buenos libros, animándote a salir de excursión,
        etc.)?`,
        dimension: DIMENSIONS[1],
        reverse: false
    },
    {
        question: `¿Tus padres alaban tu comportamiento?`,
        dimension: DIMENSIONS[1],
        reverse: false
    },
    {
        question: `¿Emplean tus padres expresiones como ésta: «Así nos agradeces todo lo que nos hemos esforzado por ti y todos los sacrificios que hemos hecho por tu bien»?`,
        dimension: DIMENSIONS[5],
        reverse: false
    },
    {
        question: `¿Ocurre que tus padres no te dejan tener cosas que necesitas, diciéndote que puedes convertirte en un chico mimado?`,
        dimension: DIMENSIONS[5],
        reverse: false
    },
    {
        question: `¿Has llegado a sentir remordimiento (culpa) por comportarte de un modo que no sea del agrado de tus padres?`,
        dimension: DIMENSIONS[5],
        reverse: false
    },
    {
        question: `¿Crees que tus padres tienen grandes esperanzas de que saques buenas notas, seas un buen deportista, etc.?`,
        dimension: DIMENSIONS[3],
        reverse: false
    },
    {
        question: `¿Ignoran tus padres el que seas descuidado o tengas un comportamiento parecido?`,
        dimension: DIMENSIONS[5],
        reverse: false
    },
    {
        question: `Si te encuentras triste, ¿puedes buscar ayuda y comprensión en tus padres?`,
        dimension: DIMENSIONS[1],
        reverse: false
    },
    {
        question: `¿Te castigan tus padres sin que tú hayas hecho nada mal?`,
        dimension: DIMENSIONS[2],
        reverse: false
    },
    {
        question: `¿Te dejan tus padres hacer las mismas cosas que pueden hacer tus amigos?`,
        dimension: DIMENSIONS[0],
        reverse: true
    },
    {
        question: `¿Te dicen tus padres que no están de acuerdo con tu forma de comportarte en casa?`,
        dimension: DIMENSIONS[5],
        reverse: false
    },
    {
        question: `¿Te obligan tus padres a comer más de lo que puedes?`,
        dimension: DIMENSIONS[2],
        reverse: false
    },
    {
        question: `¿Te critican tus padres o te dicen que eres vago o inútil delante de otras personas?`,
        dimension: DIMENSIONS[2],
        reverse: false
    },
    {
        question: `¿Se interesan tus padres por el tipo de amigos con quienes vas?`,
        dimension: DIMENSIONS[3],
        reverse: false
    },
    {
        question: `De tus hermanos, ¿es a ti a quien tus padres echan la culpa de cuánto pasa?`,
        dimension: DIMENSIONS[4],
        reverse: false
    },
    {
        question: `¿Te aceptan tus padres tal como eres?`,
        dimension: DIMENSIONS[1],
        reverse: false
    },
    {
        question: `¿Son bruscos tus padres contigo?`,
        dimension: DIMENSIONS[2],
        reverse: false
    },
    {
        question: `¿Te castigan tus padres con dureza, incluso por cosas que no tienen importancia?`,
        dimension: DIMENSIONS[2],
        reverse: false
    },
    {
        question: `¿Te pegan tus padres sin motivo?`,
        dimension: DIMENSIONS[2],
        reverse: false
    },
    {
        question: `¿Deseas que tus padres se preocupen menos de las cosas que haces?`,
        dimension: DIMENSIONS[5],
        reverse: false
    },
    {
        question: `¿Participan tus padres activamente en tus diversiones y en tus hobbies?`,
        dimension: DIMENSIONS[1],
        reverse: false
    },
    {
        question: `¿Te pegan tus padres?`,
        dimension: DIMENSIONS[2],
        reverse: false
    },
    {
        question: `¿Puedes ir donde quieres sin que tus padres se preocupen demasiado por ello?`,
        dimension: DIMENSIONS[0],
        reverse: true
    },
    {
        question: `Te ponen tus padres limitaciones estrictas a lo que puedes y no puedes hacer, y te obligan a respetarlas rigurosamente?`,
        dimension: DIMENSIONS[0],
        reverse: false
    },
    {
        question: `¿Te tratan tus padres de manera que puedas sentirte avergonzado?`,
        dimension: DIMENSIONS[2],
        reverse: false
    },
    {
        question: `¿Les permiten tus padres a tus hermanos tener cosas que a ti no te dejan tener?`,
        dimension: DIMENSIONS[4],
        reverse: false
    },
    {
        question: `¿Crees que es exagerado el miedo que tienen tus padres de que a ti te pase algo?`,
        dimension: DIMENSIONS[0],
        reverse: false
    },
    {
        question: `¿Tienes la sensación de que hay cariño y ternura entre tú y tus padres?`,
        dimension: DIMENSIONS[1],
        reverse: false
    },
    {
        question: `¿Respetan tus padres el hecho de que tú tengas opiniones diferentes a las suyas?`,
        dimension: DIMENSIONS[1],
        reverse: false
    },
    {
        question: `¿Recuerdas si tus padres han estado enfadados o amargados contigo sin que te dijeran el por qué?`,
        dimension: DIMENSIONS[2],
        reverse: false
    },
    {
        question: `¿Te han mandado tus padres a la cama sin cenar?`,
        dimension: DIMENSIONS[2],
        reverse: false
    },
    {
        question: `¿Tienes la impresión de que tus padres se sienten orgullosos de ti cuando consigues lo que te has propuesto?`,
        dimension: DIMENSIONS[1],
        reverse: false
    },
    {
        question: `¿Muestran tus padres predilección por ti en comparación con tus hermanos`,
        dimension: DIMENSIONS[4],
        reverse: true
    },
    {
        question: `¿Echan tus padres las culpas a tus hermanos aunque seas tú el responsable de lo que ha ocurrido?`,
        dimension: DIMENSIONS[4],
        reverse: true
    },
    {
        question: `¿Te manifiestan tus padres que están satisfechos contigo mediante expresiones físicas cariñosas, como darte palmadas en la espalda?`,
        dimension: DIMENSIONS[1],
        reverse: false
    },
]

let data = {
    DIMENSIONS,
    questions
}

module.exports = data;
