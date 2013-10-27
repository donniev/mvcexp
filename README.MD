#MVC Express Skeleton
	This is a skeleton app for creating an MVC application in express</p>
	The approach is as follows:
		-By convention requests are routed to files in the handlers directory based on the url
		-http://localhost:3000/show/me/the/money would expect to find show.js in the handlers directory
		-The handler files receive the request and response objects as parameters.
			The handler then calls a model file in the models folder with the request and response objects and a callback function.
			The callback has two arguments. The first is error information and the second is the results.
			The callback should then send the response as appropriate
				
		-It is the responsibility of the model file to extract and prepare data as necessary and pass that data to a service object to preform the actual work.
			The service object should callback to the model when finished.
				The model should then callback to the handler.
				In most cases the service object would be accessing database information.
		
		The codeset has a sample accessed by <a href="/list/"> http://localhost:3000/list/</a> This sample does not interact with a database.
			
#Installation

	npm install
	
	This will install the necessary dependencies
	
#Testing install

	npm start
	
	Point browser to http://localhost:2500/list/
	
	You should see a list of random numbers
	
	If you want a different port just change it in config.json
	
	