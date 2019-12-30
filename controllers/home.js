module.exports = function(app){
  var HomeController = {
    index : function(req,res){
      res.render('home/index');
    },
    login : function(req, res){
      var email = req.body.email;
      var nome = req.body.nome;
      if(email && nome){
       var usuario = {
         email : email,
         nome : nome
       };
       console.log(usuario);
	      usuario['contatos'] = [];
      	req.session.usuario = usuario;
      	res.redirect('/contatos');
      }else{
        res.send(req.body);
      }
    },
    logout : function(req, res){
	req.session.destroy();
	res.redirect('/');
	}
  }
  return HomeController;
};
