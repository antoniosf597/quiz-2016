var models = require('../models/models.js');


/*var users = { admin: {id:1, username:"admin", password:"1234"},
			pepe: {id:2, username:"pepe", password:"5678"}


};
exports.autenticar = function (login, password, callback){
	if(users[login]){
		if(password === users[login].password){
			callback(null, users[login]);
		}else{
			callback(new Error('Password erróneo'));
		}
	}else{
		callback(new Error('No existe el usuario'));
	}
};*/
exports.autenticar = function (login, password, callback){
	models.User.findOne({
		where: { username: login, password:password  }
	}).then(
		function(user){
			
				callback(null, user);

			
		}
			
		).catch(function (error){ 
			callback(new Error('No existe el usuario'));
		});
}

