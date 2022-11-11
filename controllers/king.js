var King = require('../models/king');

// List of all King
exports.king_list = function(req, res) {
res.send('NOT IMPLEMENTED: King list');
};
// for a specific King.
exports.king_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await King.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
    };
// Handle King create on POST.
exports.king_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: King create POST');
};
// Handle King delete form on DELETE.
exports.king_delete = function(req, res) {
res.send('NOT IMPLEMENTED: King delete DELETE ' + req.params.id);
};
// Handle King update form on PUT.
exports.king_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body
    ${JSON.stringify(req.body)}`)
    try {
    let toUpdate = await King.findById( req.params.id)
    // Do updates of properties
    if(req.body.king_type)
    toUpdate.king_type = req.body.king_type;
    if(req.body.cost) toUpdate.cost = req.body.cost;
    if(req.body.size) toUpdate.size = req.body.size;
    let result = await toUpdate.save();
    console.log("Sucess " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": ${err}: Update for id ${req.params.id}
    failed`);
    }
    };
// List of all King
exports.king_list = async function(req, res) {
    try{
    theKing = await King.find();
    res.send(theKing);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    // VIEWS
// Handle a show all view
exports.king_view_all_Page = async function(req, res) {
try{
theKing = await King.find();
res.render('king', { title: 'King Search Results', results: theKing });
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};
var express = require('express');
const king_controller= require('./controllers/king')
var router = express.Router();
/* GET kings */
router.get('/', king_controller.king_view_all_Page );
module.exports = router;
