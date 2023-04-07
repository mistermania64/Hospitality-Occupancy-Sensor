//Javascript Document
// function pingURL()
// {
// 	var URL = $("#url").val();
// 	var settings = 
// 	{
// 		//Define configurations for Mock API Ping
// 		cache: false,
// 		dataType: "jsonp",
// 		async: false,
// 		crossDomain: true,
// 		url: URL,
// 		method: "GET",

// 		headers:
// 		{
// 			accept: "application/json",
// 			"Access-Control-Allow-Origin": "*",
// 		},

// 		//Defines custom responses for specific status codes
// 		statusCode: 
// 		{
// 			200: function (response)
// 			{
// 				console.log("Status 200: Page is down.");
// 			},

// 			400: function (response)
// 			{
// 				console.log("Status 400: Page is down.")
// 			},

// 			0: function (response)
// 			{
// 				console.log("Status 0: Page is down.");
// 			},
// 		},
// 	};

// 	//Sends request to API and observes response
// 	$.ajax(settings).done(function (response)
// 	{
// 		console.log(response);
// 	});
// }

function pingURL()
{
	var urlInput = document.getElementById("urlInput");
	var urlToPing = urlInput.value;

	fetch(`${urlToPing}`)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
}