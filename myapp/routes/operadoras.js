var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
 var operadoras = [{nome:"Oi", codigo:"31", categoria:"Celular", preco:2},
					{nome:"Vivo", codigo:"15", categoria:"Celular", preco:1},
					{nome:"Tim",codigo: "41", categoria:"Celular", preco:3},
					{nome:"GVT",codigo: "47", categoria:"Fixo", preco:2},
					{nome:"Embratel",codigo: "21", categoria:"Fixo", preco:1}];
  res.send(JSON.stringify(operadoras));
});

module.exports = router;
