
module.exports = function(sequelize, DataTypes){
	return sequelize.define(
		'User',
		{	
			username: {
			type: DataTypes.STRING,
			validate:  { notEmpty: {msg:"-> Falta Usuario"}}
			},
			password:{
			type: DataTypes.INTEGER,
			validate:  { notEmpty: {msg:"-> Falta Contraseña"}}
			}	
		});
}