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
exports.king_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await King.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
    };
// Handle King update form on PUT.
exports.king_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body
    ${JSON.stringify(req.body)}`)
    try {
    let toUpdate = await King.findById( req.params.id)
    // Do updates of properties
    if(req.body.king_name)
    toUpdate.king_name = req.body.king_name;
    if(req.body.kingdom) toUpdate.kingdom = req.body.kingdom;
    if(req.body.years_ruled) toUpdate.years_ruled = req.body.years_ruled;
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


//controller for part 4 
// Handle a show one view with id specified by query
exports.king_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await King.findById( req.query.id)
    res.render('kingdetail',
    { title: 'King Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };

    //part 5 controller 
    // Handle building the view for creating a king.
// No body, no in path parameter, no query.
// Does not need to be async
exports.king_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('kingcreate', { title: 'King Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
};
//part 6
// Handle building the view for updating a king.
// query provides the id
exports.king_update_Page = async function(req, res) {
console.log("update view for item "+req.query.id)
try{
let result = await King.findById(req.query.id)
res.render('kingupdate', { title: 'King Update', toShow: result });
}
catch(err){
res.status(500)
res.send(`{'error': '${err}'}`);
}
};

// part 7
// Handle a delete one view with id from query
exports.king_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await King.findById(req.query.id)
    res.render('kingdelete', { title: 'King Delete', toShow:
    result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };