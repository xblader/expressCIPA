var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
 var collection = req.db.get('operadoras');
  collection.find({},{limit:20},function(e,docs){
    res.json(docs);
  });  
});

module.exports = router;
