//Javascript Document
function pingURL()
{
	var URL = $("#url").val();
	var settings = 
	{
		//Define configurations for Mock API Ping
		cache: false,
		dataType: "jsonp",
		async: false,
		crossDomain: true,
		url: URL,
		method: "GET",

		headers:
		{
			accept: "application/json",
			"Access-Control-Allow-Origin": "*",
		},

		//Defines custom responses for specific status codes
		statusCode: 
		{
			200: function (response)
			{
				console.log("Status 200: Page is down.");
			},

			400: function (response)
			{
				console.log("Status 400: Page is down.")
			},

			0: function (response)
			{
				console.log("Status 0: Page is down.");
			},
		},
	};

	//Sends request to API and observes response
	$.ajax(settings).done(function (response)
	{
		console.log(response);
	});
}