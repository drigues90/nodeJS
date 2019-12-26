module.exports = function(app){
  var HomeController = {
    index : function(req,res){
      res.render('home/index');
    },
    login : function(req, res){
      var email = req.body.email;
      var nome = req.body.nome;
      if(email && nome){
        res.send('login ok');
      }else{
        res.send(req.body);
      }
    },
    logout : function(req, res){
	res.redirect('/');
	}
  }
  return HomeController;
};
