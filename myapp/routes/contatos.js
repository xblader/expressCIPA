var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {  
  var collection = req.db.get('contatos');
  collection.find({},{limit:20},function(e,docs){
    res.json(docs);
  });  
});

router.get('/:id', function(req, res, next) {   
  var ObjectID = req.mongo.ObjectID;
  objId = new ObjectID(req.params.id); 
  var collection = req.db.get('contatos');
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
