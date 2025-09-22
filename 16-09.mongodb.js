use("bancoaula");

db.createCollection("estudantes");
db.estudantes.insertMany([
    {
        nome:"Nicoli",
        idade:17,
    },
    {
        nome:"Maria",
        idade:18,
    },
    {   nome:"Claúdio",
        idade:17,
    }
])