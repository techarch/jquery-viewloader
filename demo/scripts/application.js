if (typeof(console) != 'undefined' && console) console.info("Application loading!");

function InitializeApplication() {
	if (typeof(console) != 'undefined' && console) 
		console.info("InitializeApplication starting ...");

		// Initialize our KnockoutJS view model
		var nowDate = new Date();
		var viewModel = {  
										today: ko.observable(nowDate.toLocaleDateString()),
										timeZoneOffset: ko.observable(nowDate.getTimezoneOffset() / 60 * -1),
										now: ko.observable(nowDate.toLocaleTimeString()),
										language: ko.observable(navigator.language)
									}
									
		// Configure the view loader
		$(document).viewloader({
			logLevel: "debug",
			
			afterEachTemplate: function (templateId) { 
				if (typeof(console) != 'undefined' && console) {
					console.info("View template " + templateId + " is loaded");  
				}
			},
			
			success: 	function (successfulResolution) {
							// Once the source for all views has been loaded
							// we can now bind our KnockoutJS view model to the DOM.
							ko.applyBindings(viewModel);

							if (typeof(console) != 'undefined' && console) {
								console.info("index.html page is fully loaded and initialized");	
							}
						},
						
			error:		function (failedResolution) {
							// Loading failed somehow
							if (typeof(console) != 'undefined' && console) {
								console.error("index.html page failed to load");	
							}
						}
		});

	if (typeof(console) != 'undefined' && console) 
		console.info("InitializeApplication done");		
}

if (typeof(console) != 'undefined' && console) console.info("Application loaded!");
