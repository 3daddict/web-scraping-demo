var request = require('request');
var cheerio = require('cheerio');

//Get the html from a desired page using request
// request('https://news.ycombinator.com', function (error, response, html) {
//   if (!error && response.statusCode == 200) {
//     console.log(html);
//   }
// });

//extract specific data from element
request('https://news.ycombinator.com', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    //load page html and save to jquery $
    var $ = cheerio.load(html);
    //target and identifier element
    $('span.comhead').each(function(i, element){
        //target the prvious element which is the data we want to target
      var a = $(this).prev();
      //send the data to the console
      console.log(a.text());
    });
  }
});