const mongoose = require('mongoose');

const LivrosSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  ano: { type: Number, required: true },
  editora: { type: String, required: true },
  genero: { type: String, required: true },
  autor: { type: String, required: true },
  descricao: { type: String }
});

module.exports = mongoose.model('Livros', LivrosSchema);
