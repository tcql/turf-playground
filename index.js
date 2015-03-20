var express = require('express');
var ExpressBrute = require('express-brute');
var bodyParser = require('body-parser');
var nedb = require('nedb');
var crypto = require('crypto');
var morgan = require('morgan');
var fs = require('fs');

var app = express();
var db = new nedb({
    filename: __dirname+'/data/sessions.db',
    autoload: true
});

var log = fs.createWriteStream(__dirname + '/access.log', {flags: 'a'});


app.use(morgan('short', {stream: log}));

// Express-Brute dosen't recommend using MemoryStore in production, but
// we're still doing a small, single server test environment.
// TODO: setup Redis or something to handle this
var brutestore = new ExpressBrute.MemoryStore();
var bruteforce = new ExpressBrute(brutestore, {
  freeRetries: 5
});

app.set('port', 7877);
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/new', function (req, res) {
  var id = crypto.randomBytes(10).toString('hex');
  res.send({id: id})
});

app.post('/save', bruteforce.prevent, function (req, res) {
  if (!req.body.id) {
    var id = crypto.randomBytes(10).toString('hex');
  } else {
    var id = req.body.id;
  }

  if (!req.body.text && !req.body.geometry) {
    res.send({id: id});
    return;
  }

  db.update({_id: id}, {_id: id, text: req.body.text, geometry: req.body.geometry}, {upsert: true}, function (err) {
    if (!err) {
      res.send({id: id});
    } else {
      res.send({error: err})
    }
  });
});

app.get('/load/:id', function (req, res) {
  var id = req.params.id;
  db.findOne({_id: id}, function (err, doc) {
    res.send(doc);
  });
});


app.get('/list', function (req, res) {
  db.find({}, function (err, docs) {
    var ids = docs.map(function (elem) {
      return {id: elem._id, text_length: elem.text.length};
    });
    res.send(ids);
  });
});

app.use(express.static(__dirname+"/public"));


server = app.listen(app.get('port'), function () {
  host = server.address().address
  port = server.address().port
  console.log('running %s %s', host, port)
});
