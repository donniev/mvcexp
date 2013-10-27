/**
 * New node file
 */
exports.process = function(req, res){
	var mlist=require("../models/mlist");
	mlist.process(req,res,function(err,results){
		if(err){
			res.render("500",{'error':err});
			//res.send(500);
		}else{
			res.render("list",{'results':results});
		}


	})
};