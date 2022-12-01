var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var king_controller = require('../controllers/king');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// King ROUTES ///
// POST request for creating a King.
router.post('/king', king_controller.king_create_post);
// DELETE request to delete King.
router.delete('/king/:id', king_controller.king_delete);
// PUT request to update King.
router.put('/king/:id', king_controller.king_update_put);
// GET request for one King.
router.get('/king/:id', king_controller.king_detail);
// GET request for list of all King items.
router.get('/king', king_controller.king_list);
module.exports = router;

/* GET detail king page */
router.get('/detail', king_controller.king_view_one_Page);
/* GET create King page */
router.get('/create', king_controller.king_create_Page);
//part 6
/* GET create update page */
router.get('/update',secured, king_controller.king_update_Page);
// A little function to check if we have an authorized user and continue on
or
// redirect to login.
const secured = (req, res, next) => {
if (req.user){
return next();
}
req.session.returnTo = req.originalUrl;
res.redirect("/login");
}
//part 7
/* GET delete king page */
router.get('/delete', king_controller.king_delete_Page);