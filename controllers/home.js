module.exports = function(app){
  var HomeController = {
    index : function(req,res){
      res.render('home/index');
    },
    login : function(req, res){
      var email = req.body.usuario.email;
      var nome = req.body.usuario.nome;
      if(email && nome){
        console.log('login ok');
      }else{
        res.redirect('/');
      }
    }
  }
  return HomeController;
};