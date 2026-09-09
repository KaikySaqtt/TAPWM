const app = require('../../app'); // sobe de app/config → app → raiz, onde está o app.js

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});