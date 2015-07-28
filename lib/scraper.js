var cheerio = require('cheerio');
var request = require('request');

var googleChrome = 'com.android.chrome';
var dhlPaket = 'de.dhl.paket';
var dhlExpressItaly = 'it.dhl.express.mobile';
var marvelBattle = 'com.kabam.marvelbattle';

var appID = marvelBattle;

exports.getReviewTitles = function (appID, callback) {
  request('https://play.google.com/store/apps/details?id=' + appID, function (error, response, html) {
    if (!error && response.statusCode == 200) {
      var $ = cheerio.load(html);
      $('span.review-title').each(function (i, element) {
        var review = $(this);
        callback(review.text());
      });
    }
  })
};

exports.getReviewBodies = function (appID, callback) {
  request('https://play.google.com/store/apps/details?id=' + appID, function (error, response, html) {
    if (!error && response.statusCode == 200) {
      var $ = cheerio.load(html);
      $('div.review-body').each(function (i, element) {
        var review = $(this).clone()
          .children()
          .remove()
          .end();
        callback(review.text());
      });
    }
  })
};

exports.getReviews = function (appID, callback) {
  request('https://play.google.com/store/apps/details?id=' + appID, function (error, response, html) {
    if (!error && response.statusCode == 200) {
      var $ = cheerio.load(html);
      $('div.review-body').each(function (i, element) {
        var review = $(element);
        callback(review.text());
      });
    }
  })
};

module.exports.getNumberOfReviews = function (appID, callback) {
  request('https://play.google.com/store/apps/details?id=' + appID, function (error, response, html) {
    if (!error && response.statusCode == 200) {
      var $ = cheerio.load(html);
      var titles = $('div.single-review');
      callback(titles.filter('div.single-review').length);
    }
  })
};

//module.exports.getReviewTitles(appID, callback);
//module.exports.getReviewBodies(appID, callback);
module.exports.getNumberOfReviews(appID, function (result) {
  console.log(result)
});
//module.exports.getReviews(appID, callback);
