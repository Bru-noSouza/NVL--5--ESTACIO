const mongoose = require("mongoose");

const banco = require("./conexao.js");

const LivroSchema = new banco.Schema({
  _id: banco.Types.ObjectId,
  titulo: String,
  codEditora: Number,
  resumo: String,
  autores: [String],
});

const Livro = banco.model("Livro", LivroSchema, "livros");

module.exports = Livro;
