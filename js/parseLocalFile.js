function parseLocalFile(filename)
{
   fetch(filename)
	.then(response => response.json())
	.then(data => {

	console.log(data);

	//Stringify, log string, and print in textarea
	const jsonString = JSON.stringify(data, null, 2); // Convert the data to a nicely formatted JSON string)
	console.log(jsonString);
	document.getElementById('jsonResponseField').value = "JSON Response:\n" + jsonString;

	// Parse the returned data into a JSON object
	const jsonObj = JSON.parse(jsonString);

	//Extract specific values from JSON object
	// newOccupied = parseInt(jsonString.occupied);
	// newVacant = parseInt(jsonString.vacant);
	// newRooms = parseInt(jsonString.ttlRooms);

	// newOccupied = jsonObj.occupied;
	// newVacant = jsonObj.vacant;
	// newRooms = jsonObj.ttlRooms;

	newOccupied = parseInt(jsonObj.occupied);
	newVacant = parseInt(jsonObj.vacant);
	newRooms = parseInt(jsonObj.ttlRooms);

	//Update chart
	setRooms(newRooms);
	setOccupied(newOccupied);
	setVacant(newVacant);

	//Update Labels
   updateLabels();

	})

  .catch(error => {
  	console.error(error)
  });

}

function parseLocalFile2(filename)
{
   fetch(`${filename}`)
	.then(response => response.json())
	.then(data => {

	console.log(data);

	//Stringify, log string, and print in textarea
	const jsonString = JSON.stringify(data, null, 2); // Convert the data to a nicely formatted JSON string)
	console.log(jsonString);
	document.getElementById('jsonResponseField').value = "JSON Response:\n" + jsonString;

	// Parse the returned data into a JSON object
	const jsonObj = JSON.parse(jsonString);

	//Extract specific values from JSON object
	// newOccupied = parseInt(jsonObj.occupied);
	// newVacant = parseInt(jsonObj.vacant);
	// newRooms = parseInt(jsonObj.ttlRooms);

	newOccupied = jsonObj.occupied;
	newVacant = jsonObj.vacant;
	newRooms = jsonObj.ttlRooms;

	//Update chart
	setRooms(newRooms);
	setOccupied(newOccupied);
	setVacant(newVacant);

	//Update Labels
   updateLabels();

	})

  .catch(error => {
  	console.error(error)
  });

}

//module.exports = parseLocalFile;