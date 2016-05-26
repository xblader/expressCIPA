var express = require('express');
var bson = require('bson');
var mongo = require('mongodb');
var monk = require('monk');
var db =  monk('localhost:27017/test');

var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var collection = db.get('contatos');
  collection.find({},{limit:20},function(e,docs){
    res.json(docs);
  });  
});

router.get('/:id', function(req, res, next) {
  var id = req.params.id;  
  var ObjectID = mongo.ObjectID;
  objId = new ObjectID(id); 
  var collection = db.get('contatos');
    collection.find({"_id": objId},{},function(e,docs){
        res.json(docs);
    });
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
