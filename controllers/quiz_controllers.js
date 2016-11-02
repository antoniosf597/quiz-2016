var models = require('../models/models.js');

// GET /quizes/question

exports.question = function(req,res){
	models.Quiz.findAll().then(function(quiz){
		res.render('quizes/question',{pregunta:quiz[0].pregunta});
		quiz[0].aciertos = 0;
		quiz[0].save({fields: ['fallos']});

});
	

};



//GET /quizes/answer


exports.answer = function(req,res){
models.Quiz.findAll().then(function(quiz){	
	if(req.query.respuesta === quiz[0].respuesta){
		//quiz[0].aciertos = 0;
		quiz[0].aciertos += 1;
		quiz[0].save({fields: ['aciertos']}).then(function() {
				res.render('quizes/answer',{respuesta:'Correcto'});
		});
 		
		
	}else{
		quiz[0].fallos += 1;
		quiz[0].save({fields: ['fallos']}).then(function() {
		res.render('quizes/contador',{respuesta:'Incorrecto',aciertos: quiz[0].aciertos });
		});

	}
});
};