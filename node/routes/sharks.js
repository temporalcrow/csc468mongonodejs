const express = require('express'),
    router = express.Router(),
    Shark = require('../controllers/sharks');

router.get('/', function(req, res){
    Shark.index(req,res);
});

router.post('/addshark', function(req, res){
    Shark.create(req,res);
});

router.get('/getshark', function(req,res){
    Shark.list(req,res);
});1

module.exports = router;