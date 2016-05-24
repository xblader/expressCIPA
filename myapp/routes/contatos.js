var express = require('express');
var MongoClient = require('mongodb').MongoClient;

var router = express.Router();
var contatos;
/* GET users listing. */
router.get('/', function(req, res, next) {
    MongoClient.connect('mongodb://localhost:27017/test', function(err, db) {
    if (err) {
      throw err;
    }
    db.collection('contatos').find().toArray(function(err, result) {
      if (err) {
        throw err;
      }
      contatos = result;
    });
  });
  res.send(JSON.stringify(contatos));
});

router.get('/:id', function(req, res, next) {
  var id = req.params.id;
  var result = contatos.filter(function(v) {
    return v.id == id; // Filter out the appropriate one
  });
  res.send(JSON.stringify(result));
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
