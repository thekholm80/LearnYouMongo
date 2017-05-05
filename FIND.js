/*
 FIND
 Exercise 3 of 9

Here we will learn how to search for documents.

In this exercise the database name is learnyoumongo.
So, the url would be something like: mongodb://localhost:27017/learnyoumongo

Use the parrots collection to find all documents where age
is greater than the first argument passed to your script.

Using console.log, print the documents to stdout.
*/

var mongo = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/learnyoumongo';

mongo.connect(url, function(err, db) {
  if (err) throw err;
  
  var collection = db.collection('parrots');
  
  collection.find({
    age: { $gt: parseInt(process.argv[2]) }
  }).toArray(function(err, documents) {
    if (err) throw err;
    
    console.log(documents);
  });
  
  db.close();
});

