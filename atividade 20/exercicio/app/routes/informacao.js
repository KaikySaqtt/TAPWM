module.exports = function (app) {
  app.get('/informacao/cursos', function (req, res) {
    res.render('informacao/cursos');
  });

  app.get('/informacao/historia', function (req, res) {
    res.render('informacao/historia');
  });

  app.get('/informacao/professor', function (req, res) {
    res.render('informacao/professor');
  });
};