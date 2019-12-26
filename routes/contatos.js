module.exports = function(app){
  var contatos = app.controllers.contatos;
  app.get('/',contatos.index);
};
