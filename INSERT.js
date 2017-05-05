/*
 INSERT
 Exercise 5 of 9

Connect to MongoDB on port 27017.
You should connect to the database named learnyoumongo and insert
a document into the docs collection.

The document should be a json document with the following properties:

  * `firstName`
  * `lastName`

firstName will be passed as the first argument to the lesson.

lastName will be passed as the second argument to the lesson.

Use console.log to print out the object used to create the document.

Make sure you use JSON.stringify convert it to JSON.
*/

var mongo = require("mongodb").MongoClient;
var url = 'mongodb://localhost:27017/learnyoumongo';

mongo.connect(url, function(err, db) {
  if (err) throw err;
  
  var object = {
    firstName: process.argv[2],
    lastName: process.argv[3]
  };
  
  var collection = db.collection('docs');
  
  collection.insert(object, function(err, data) {
    if (err) throw err;
    
    console.log(JSON.stringify(object));
  });
  
  db.close();
});