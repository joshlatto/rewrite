/* GET editing stand-in page */
module.exports.editController = function(req, res, next) {
	res.render('index', { title: 'Edit'})
}