jQuery ViewLoader
=================
ViewLoader allows you to __break up__ a page into __multiple views__ using your template engine of choice (e.g. jQuery Template or jsView), each __loaded  and rendered dynamically__. When combined with KnockoutJS you can have each view be data-bound to a view model.

Syntax
---------

    $(document).viewloader({
        logLevel: "debug",
    
       afterEachTemplate: function (templateId) { 
          // code to execute after each view has been successfully loaded
       },
    
       success: function (successfulResolution) {
          // Code to execute once all views have been loaded for the page
       },
    
       error: function (failedResolution) {
          // Code to execute if an error occurs while loading the views 
       
    });

Note: You can pass a __versionId__ setting so that views can be retrieved with a version identifier in the querystring, to ensure proper cache retrieval or caching invalidation. Example:

    $(document).viewloader({
        versionId: '1.0.0-1',
		// ...
	});

	
Demo
--------
See the __demo__ folder for a complete example. The demo consists of:

  1. An __index.html__ containing 2 views, each view has a subview
  2. Four separate view files (with the __.view.html__ extension)
  3. An __application.js__ with an __InitializeApplication__ function initializing the ViewLoader

Note that if you want to run the demo outside a web server (i.e. from the file system), you will need to use either __FireFox__ or IE in IE10 mode as other browsers will prevent AJAX calls to retrieve the template due to strict __CORS__ rule enforcement).

(c) 2017 Philippe Monnet (@techarch) [http://blog.monnet-usa.com/](http://blog.monnet-usa.com/ "The Tech. Arch.")
