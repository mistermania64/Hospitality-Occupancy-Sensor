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
    //document.getElementById('jsonResponseField').value = response.json();
  })
  .then(data => {
  	console.log(data);
	const json = JSON.stringify(data, null, 2); // Convert the data to a nicely formatted JSON string)
	console.log(json);

	document.getElementById('jsonResponseField').value = "JSON Response:\n" + json;
	})

  .catch(error => console.error('Error:', error));
}

function displayJSONResponse(jsonString)
{
	// var jsonObj = JSON.parse(jsonString); //Parse JSON String into object
	// var table = document.createElement("table"); // Create a table element

	// // Create table rows and cells to display the JSON data
 //      for (var key in jsonString) {
 //        var row = table.insertRow();
 //        var cell1 = row.insertCell(0);
 //        var cell2 = row.insertCell(1);
 //        cell1.innerHTML = key;
 //        cell2.innerHTML = jsonString[key];
 //      }
      
 //      document.getElementById("json-table").appendChild(table); // Add the table to the HTML page
}