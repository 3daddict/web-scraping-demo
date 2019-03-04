var request = require('request');
var cheerio = require('cheerio');

//Get the html from a desired page using request
request('https://news.ycombinator.com', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    console.log(html);
  }
});