const express = require("express");
const livroDao = require("../modelo/livro-dao");

const router = express.Router();

function obterLivros(req, res) {
  const livros = livroDao.obterLivros();
  res.json(livros);
}

function incluir(req, res) {
  const novoLivro = req.body;
  livroDao.incluirLivro(novoLivro);
  res.sendStatus(201);
}

function excluir(req, res) {
  const livroId = req.params.id;
  livroDao.excluirLivro(livroId);
  res.sendStatus(204);
}

router.get("/livros", obterLivros);
router.post("/livros", incluir);
router.delete("/livros/:id", excluir);

module.exports = router;
