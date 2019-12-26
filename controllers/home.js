module.exports = function(app){
  var HomeController = {
    index : function(req,res){
      res.render('home/index');
    },
    login : function(req, res){
      var email = req.body.email;
      var nome = req.body.nome;
      if(email && nome){
        var usuario = req.body.usuario;
	usuario['contatos'] = [];
	req.session.usuario = usuario;
	res.redirect('/contatos');
      }else{
        res.send(req.body);
      }
    },
    logout : function(req, res){
	req.sessio.destroy();
	res.redirect('/');
	}
  }
  return HomeController;
};
