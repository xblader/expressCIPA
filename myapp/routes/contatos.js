var express = require('express');
var router = express.Router();
var contatos = [
			{nome:"Joao da silva", telefone:"99998888", data: new Date(), operadora: {nome:"Oi",codigo:31, categoria:"Celular", preco:2}},
			{nome:"Maria do carvalho", telefone:"99997777", data: new Date(),operadora: {nome:"Vivo",codigo:15, categoria:"Celular", preco:1}},
			{nome:"Pedro dos santos", telefone: "99996666", data: new Date(),operadora: {nome:"Tim",codigo:41, categoria:"Celular", preco:3}}
		];
/* GET users listing. */
router.get('/', function(req, res, next) {
  
  res.send(JSON.stringify(contatos));
});

router.post('/', function(req, res, next) {  	
  contatos.push(req.body);
  res.send(JSON.stringify(contatos));
});

router.delete('/', function(req, res, next) {  	
 var contatosnaoselecionados = req.body.filter(function(contato){
	if(!contato.selecionado) return contato;
 });
  contatos = contatosnaoselecionados;
  res.send(JSON.stringify(contatos));
});

module.exports = router;
