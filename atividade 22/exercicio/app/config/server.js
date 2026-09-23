let express = require('express');
let consign = require('consign'); 
let app = express(); //executando express
app.set('view engine', 'ejs'); //o mecanismo de engine a ser usado

app.set('views', './app/views'); //diretório onde os arquivos estão
consign({cwd:'app'}) // para incluir a pasta app 
.include('routes') 
.then('config/dbConnection.js') // garante que todos os arquivos do routes tenham sido processados 
consign().include('app/routes').into(app);
module.exports = app;
