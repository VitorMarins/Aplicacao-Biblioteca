const Livros = require('../models/Livros.models');

exports.getLivro = async (req, res) => {
  try {
    const livros = await Livros.find();
    res.json(livros);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getLivroById = async (req, res) => {
  try {
    const livros = await Livros.findById(req.params.id);
    if (!livros) {
      return res.status(404).json({ message: 'Livro não encontrado' });
    }
    res.json(livros);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createLivro = async (req, res) => {
  try {
    const livros = new Livros(req.body);
    await livros.save();
    res.status(201).json(livros);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateLivro = async (req, res) => {
  try {
    const livros = await Livros.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!livros) {
      return res.status(404).json({ message: 'Livro não encontrado' });
    }
    res.json(livros);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteLivro = async (req, res) => {
  try {
    await Livros.findByIdAndDelete(req.params.id);
    res.json({ message: 'Livros deletada' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
