/**
 * New node file
 */
//var list=require("./handlers/list") 
var routes=require("./handlers");
module.exports =function(app){
	app.get('/',function(req,res){
		res.render("index",{"title":app.get("config").applicationName});
	})
	app.get(/\/(.*)(\/)?/,function(req,res){
		var method=req.params[0].split("/")[0].toLowerCase();
		try{
			var h=require("./handlers/"+method);
				h.process(req,res);
		}catch(ex){
			res.render("404",{"method":method});
		}
	})
	app.put(/\/(.*)(\/)?/,function(req,res){
		var method=req.params[0].split("/")[0].toLowerCase();
		try{
			var h=require("./handlers/"+method);
				h.process(req,res);
		}catch(ex){
			res.render("404",{"method":method});
		}
	})
};
