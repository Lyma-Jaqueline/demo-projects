// Importa o Express
const express = require('express');
const app = express();
const PORT = 3000;

// Middleware para interpretar JSON
app.use(express.json());

// Rota GET simples
app.get('/', (req, res) => {
  res.send('Servidor Node.js com Express está rodando!');
});

// Rota POST para exemplo
app.post('/dados', (req, res) => {
  const dados = req.body;
  res.json({ mensagem: 'Dados recebidos!', dados });
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
