var data = require("../data.json");

exports.addFriend = function(req, res) {    
	// Your code goes here
	var name = req.query.name;
  var description = req.query.description;
  var imgURL = "http://lorempixel.com/400/400/people/";
  var nf = {'name':name, 'description':description, "imageURL":imgURL};
  data.friends.push(nf);
  res.render('index', data);
 }