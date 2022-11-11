var King = require('../models/king');
// List of all King
exports.king_list = function(req, res) {
res.send('NOT IMPLEMENTED: King list');
};
// for a specific King.
exports.king_detail = function(req, res) {
res.send('NOT IMPLEMENTED: King detail: ' + req.params.id);
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
exports.king_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: King update PUT' + req.params.id);
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