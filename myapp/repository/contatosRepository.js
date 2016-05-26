var mongodb = require('mongodb').MongoClient;
var db;

mongodb.connect('mongodb://localhost:27017/test', function(err, dbase) {
    if (err) {
      throw err;
    }
    db = dbase;
  });

var _getAll = function(){
    return db.collection('contatos').find().toArray();
}

module.exports = { getAll : _getAll};