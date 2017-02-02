var express = require('express');
var router = express.Router();
var ctrlNav = require('../controllers/navigation')
var ctrlEdit = require('../controllers/editing')

/* Navigation pages */
router.get('/', ctrlNav.homepageController)
router.get('/add', ctrlNav.addContentController)
router.get('/explore', ctrlNav.exploreController)


/* Editing pages */
router.get('/edit', ctrlEdit.editController)


module.exports = router;
