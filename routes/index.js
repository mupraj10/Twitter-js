const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets } );
});
router.use(express.static('twitter-js'))

// req.originalUrl // URI 
router.get('/', function(req,res){
    res.sendFile(req.originalUrl);
});

module.exports = router;