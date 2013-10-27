/**
 * New node file
 */
exports.process=function(req,res,callback){
	var getInfo=require("../servicemodels/listskeleton");
	var cb=callback;
	getInfo.retrieve(req,res,function(err,results){
		cb(err,results);
	})
	
}