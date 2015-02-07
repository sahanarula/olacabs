/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	renderLogin: function(req, res){
		res.view('users/login');
	},
	saveFriends: function(req, res){
		Friend.findOne({myId: req.body.myId}).exec(function(err,found){
		if(err) throw err;
		console.log(found);
		if(found){
		  	Friend.update(req.body).exec(function(err,updated){
			  console.log('inside first');
				console.log('Updated user to have name '+updated[0].id);
			});
		  }
		  else
		  	Friend.create(req.body, function(err, friend){
		  		console.log('created new user');
		  		console.log(friend);
		  	})
		});
	}
};

