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
  var collection = req.db.get('contatos');
  var contatos = [];
  var contato = req.body;
  delete contato["_id"];
  contatos.push(contato);
   // Insert some users
    collection.insert(contatos, function (err, result) {
      if (err) {
        console.log(err);
      } else {
        console.log('Inserted %d documents into the "contatos" collection. The documents inserted with "_id" are:', result.length, result);
        res.json(result);
      }
    });
});

router.delete('/', function(req, res, next) {  	 
  var collection = req.db.get('contatos');
  var contatos = [];
  var ObjectID = req.mongo.ObjectID;  

  req.body.forEach(function(item){
    contatos.push(new ObjectID(item._id));
  });
  collection.remove({'_id':{'$in': contatos}},function(){
    res.json(contatos);
  });
});

module.exports = router;
