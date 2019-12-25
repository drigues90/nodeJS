module.exports  = funtion(app){
 var home = app.controller.home; 
 app.get('/',home.index);
 app.post('/entrar',home.login);
 app.get('/sair',home.logout);
}