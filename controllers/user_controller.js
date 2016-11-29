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


// GET /users/new
exports.new = function(req, res){
	var user = models.User.build( // crea objeto user
		);
		res.render('users/new', {user: user});
	};

// POST /users/create

exports.create = function(req, res){
	var user = models.User.build( req.body.user);

user
.validate()
.then(
	function(err){
		if(err){
			res.render('users/new', {user: user, errors: err.errors});
		}else{
			// guarda en DB los campos usuario y contraseña
			user.save({fields: ["username", "password"]}).then(function(){
				res.redirect('/users')})

			}
		}
	);
	};


//GET /users

exports.index = function(req,res){
	models.User.findAll().then(function(users){
		res.render('users/index.ejs', {users: users});
	}).catch( function(error) { next(error);})
};