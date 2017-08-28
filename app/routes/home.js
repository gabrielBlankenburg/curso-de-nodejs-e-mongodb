module.exports = function(app){
	// Configura resposta para o root ('/')
	app.get('/', function(req, res){
		res.render('home/index');
	});
}