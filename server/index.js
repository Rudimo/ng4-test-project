'use strict';

const path = require('path');
const request = require('request');
const express = require('express');
const app = express();

const Twitter = require('twitter');

const twitterClient = new Twitter({
  consumer_key: '',
  consumer_secret: '',
  access_token_key: '',
  access_token_secret: ''
});

app.use('/', function (req, res) {

  twitterClient.get('search/tweets', {q: req.query.tagName, count: 50}, function(error, tweets, response) {
    if (error) return console.log(error);

    res.append('Access-Control-Allow-Origin', '*');
    res.send(tweets);

  });

});

app.listen(8001, function () {
  console.log(' The app is up on port: ', 8001);
});
