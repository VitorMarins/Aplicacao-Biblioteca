const express = require('express');
const {
  getLivro,
  getLivroById,
  createLivro,
  updateLivro,
  deleteLivro
} = require('../controllers/Livros.controllers');
const router = express.Router();

router.get('/',getLivro);
router.get('/:id',getLivroById);
router.post('/',createLivro);
router.put('/:id',updateLivro);
router.delete('/:id',deleteLivro);

module.exports = router;
