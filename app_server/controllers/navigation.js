/* Controllers for basic navigation pages. */

/* GET 'home' page. */
module.exports.homepageController = function(req, res, next) {
  res.render('home', { title: 'Rewrite' });
};

/* GET 'Add content' page */
module.exports.addContentController = function(req, res, next) {
	res.render('index', { title: 'Add'});
}

/* GET 'Explore' page */
module.exports.exploreController = function(req, res, next) {
	res.render('index', { title: 'Explore'});
}