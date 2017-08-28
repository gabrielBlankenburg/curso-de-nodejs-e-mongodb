var http = require('http');

// Cria o server, o parametro é uma função que recebe outra fun~ção, e essa função recebe como parametros requisição e resposta
var server = http.createServer(function(req, res){
	// verifica a url requisitada
	var categoria = req.url;
	
	// Verifica as urls para redirecionar
	if(categoria == '/tecnologia'){
		res.end("<html><body>Noticias de Tecnilogia</body></html>"); 
	}
	else if(categoria == '/beleza'){
		res.end("<html><body>Noticias de Beleza</body></html>"); 
	}
	else{
		res.end("<html><body>Portal de Noticias</body></html>"); 
	}
	
});

// Faz a variavel server ficar ouvindo a porta 3000
server.listen(3000);