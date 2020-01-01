module.exports = function(app){
  var ContatosController = {
    index : function(req, res) {
      var usuario = req.session.usuario;
      var contatos = usuario.contatos;
      var params = {usuario:usuario, contatos: contatos};
      res.render('contatos/index',params);
    },
    create : function(req,res){
      var contato = req.body.contato;
      var usuario = req.session.usuario;
      usuario.contatos.push(contato);
      res.redirect('/contatos');
    },
    show : function(req,res){
      var id = req.params.id;
      var contato = req.session.usuario.contatos[id];
      var params = {contato: contato, id: id};
      res.render('contatos/show',params);
    }
  }
  return ContatosController;
};
