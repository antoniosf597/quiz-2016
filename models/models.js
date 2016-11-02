var path = require('path');
// Cargar Modelo ORM
var Sequelize = require('sequelize');
// Usar BBDD SQLite:
var sequelize = new Sequelize(null, null, null,
	{ dialect: "sqlite", storage: "quiz.sqlite"});

// Importar la defiicion de la tabla Quiz en quiz.js
var Quiz = sequelize.import(path.join(__dirname,'quiz'));

exports.Quiz = Quiz;//exportar definicion d ela tabla Quiz

// sequelize.sync() crea e inicializa tabla de preguntas en DB
sequelize.sync().then(function(){
	// success(..) ejecuta el manejador una vez creada la tabla
	Quiz.count().then(function(count){
		if(count == 0){ //la tabla se inicializa solo si esta vacia
			Quiz.create({
				pregunta: 'Capital de Italia',
				respuesta: 'Roma',
				aciertos: 0		})
		.then(function(){console.log('Base de datos inicializada')})
		}
	})
})