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
      console.log('recupertato da sessao',contato);
      var params = {contato: contato, id: id};
      res.render('contatos/show',params);
    },
    edit : function(req,res){
      var id = req.params.id;
      var usuario = req.session.usuario;
      var contato = usuario.contatos[id];
      var params = {contato: contato,id :id};
      res.render('contatos/edit',params);
    },
    update : function(req,res){
      var contato = req.body.contato;
      var usuario = req.session.usuario;
      usuario.contatos[req.params.id] = contato;
      res.redirect('/contatos');
    },
    destroy: function(req,res){
      var usuario = req.session.usuario;
      var id = req.params.id;
      usuario.contatos.splice(id,1) // 1 quantidade de elementos a serem removidos do array;
      res.redirect('/contatos');
    }
  }
  return ContatosController;
};
