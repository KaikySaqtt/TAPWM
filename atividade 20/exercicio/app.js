const express = require('express');
const path = require('path');

let app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'app', 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

app.use('/', require('./app/routes/home'));
app.use('/sobre', require('./app/routes/sobre'));
app.use('/programacao', require('./app/routes/programacao'));
app.use('/contato', require('./app/routes/contato'));
app.use('/inscricao', require('./app/routes/inscricao'));
app.use('/novidades', require('./app/routes/novidades'));
app.use('/informacao', require('./app/routes/informacao'));

module.exports = app;