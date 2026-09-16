let express = require('express');
let app = express(); //executando express
app.set('view engine', 'ejs'); //o mecanismo de engine a ser usado

app.set('views', './app/views'); //diretório onde os arquivos estão
module.exports = app;
