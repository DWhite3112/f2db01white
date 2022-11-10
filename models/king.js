//server start
async function recreatDB(){
  await King.delete.Many();

  let insastance1 = new
  King({name:"Dree", kingdom:'the world',
years_ruled:300});
instance1.save( function(err,doc) {
if(err) return console.error(err);
console.log("First object saved")
});
  let insastance2 = new
  King({name:"Alexander", kingdom:'Macedonia',
years_ruled:33});
instance1.save( function(err,doc) {
if(err) return console.error(err);
console.log("First object saved")
});
  let insastance3 = new
  King({name:"Alfred", kingdom:'Wessex',
years_ruled:51});
instance1.save( function(err,doc) {
if(err) return console.error(err);
console.log("First object saved")
});
}
let reseed = true;
if (reseed) {recreateDB();
}