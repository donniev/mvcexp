/**
 * New node file
 */
exports.retrieve=function(req,res,callback){
	var results=[];
	var err=null;
	try{
		for(var i =0;i<10;i++){
			results.push(Math.random());
		}
	}catch(ex){
		err=ex;
	}
	callback(err,results);
}