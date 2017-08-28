// Recebe o parametro app (que vem do express)
module.exports = function(app){
	app.get('/noticias', function(req, res){
		res.render('noticias/noticias');
	});
};
	