module.exports = function (app) {
  // res.render() processa uma view (.ejs) e retorna o HTML compilado.
  // res.send() manda a resposta direto, sem passar por view engine.
  app.get('/novidades', function (req, res) {
    res.send(`
      <h1>Novidades</h1>
      <p>Em breve, novidades sobre a Semana de Tecnologia 2026!</p>
      <a href="/">Voltar</a>
    `);
  });
};