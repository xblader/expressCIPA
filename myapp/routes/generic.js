var express = require('express');
var jwt    = require('jsonwebtoken'); // used to create, sign, and verify tokens
var config = require('../config');
var router = express.Router();

router.use(function(req, res, next) {

  // check header or url parameters or post parameters for token
  var token = req.body.token || req.query.token || req.headers['x-access-token'];

  // decode token
  if (token) {

    // verifies secret and checks exp
    jwt.verify(token, config.secret, function(err, decoded) {      
      if (err) {
        return res.json({ success: false, message: 'Failed to authenticate token.' });    
      } else {
        // if everything is good, save to request for use in other routes
        req.decoded = decoded;    
        next();
      }
    });

  } else {

    // if there is no token
    // return an error
    return res.status(403).send({ 
        success: false, 
        message: 'No token provided.' 
    });
    
  }
});


router.get('/:entity', function(req, res, next) {  
  var collection = req.params.entity;
  var collection = req.db.get(collection);
    collection.find({},{},function(e,docs){
        res.json(docs);
    });
});

router.post('/:entity', function(req, res, next) {    
  var collection = req.db.get(req.params.entity);
  var documents = [];
  var documentx = req.body;
  delete documentx["_id"];
  documents.push(documentx);
   // Insert some users
    collection.insert(documents, function (err, result) {
      if (err) {
        console.log(err);
      } else {
        console.log('Inserted %d documents into the "req.params.entity" collection. The documents inserted with "_id" are:', result.length, result);
        res.json(result);
      }
    });
});

router.delete('/:entity', function(req, res, next) {    
  var collection = req.db.get(req.params.entity);
  var documents = [];
  var ObjectID = req.mongo.ObjectID;  

  req.body.forEach(function(item){
    documents.push(new ObjectID(item._id));
  });
  collection.remove({'_id':{'$in': documents}},function(){
    res.json(documents);
  });
});

router.get('/:entity/:id', function(req, res, next) {  
  var collection = req.params.entity;
  var ObjectID = req.mongo.ObjectID;
  objId = new ObjectID(req.params.id); 
  var collection = req.db.get(collection);
    collection.find({"_id": objId},{},function(e,docs){
        res.json(docs);
    });    
});

module.exports = router;
