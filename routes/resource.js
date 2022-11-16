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
router.get('/detail', king_controlers.king_view_one_Page);
