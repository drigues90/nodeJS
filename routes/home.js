module.exports  = funtion(app){
 var home = app.controller.home; 
 app.get('/',home.index);
}