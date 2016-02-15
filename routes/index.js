var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/thelist', function(req, res, next) {
  var MongoClient = mongodb.MongoClient;
 
  var url = 'mongodb://localhost:27017/sampsite';

  MongoClient.connect(url, function(err, db){
    if(err){
      console.log('Unable to connect to the server', err);	
    } else {
      console.log("Mongo DB Conneciton has been established!");
      
      var collection = db.collection('students');
      collection.find({}).toArray(function(err, result){
        if (err){
          res.send(err);
        } else if (result.length){
          res.render('studentlist', {
            "studentlist" : result
          });
        } else {
          res.send('No documents has found');
        }
       
        db.close();
      });
    }
  });
});

router.get('/newstudent', function(req, res){
  res.render('newstudent', {title: 'Add new Student'});
});


router.post('/addstudent', function(req, res){
 
    // Get a Mongo client to work with the Mongo server
    var MongoClient = mongodb.MongoClient;
 
    // Define where the MongoDB server is
    var url = 'mongodb://localhost:27017/sampsite';
 
    // Connect to the server
    MongoClient.connect(url, function(err, db){
      if (err) {
        console.log('Unable to connect to the Server:', err);
      } else {
        console.log('Connected to Server');
 
        // Get the documents collection
        var collection = db.collection('students');
 
        // Get the student data passed from the form
        var student1 = {student: req.body.student, street: req.body.street,
          city: req.body.city, state: req.body.state, sex: req.body.sex,
          gpa: req.body.gpa};
 
        // Insert the student data into the database
        collection.insert([student1], function (err, result){
          if (err) {
            console.log(err);
          } else {
 
            // Redirect to the updated student list
            res.redirect("thelist");
          }
 
          // Close the database
          db.close();
        });
 
      }
    });
 
  });





module.exports = router;
