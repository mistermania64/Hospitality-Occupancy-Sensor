function parseLocalFile(filename)
{
   fetch(`${filename}`, {mode: 'cors'})
	.then(response => response.json())
	.then(data => {

	console.log(data);

	const jsonString = JSON.stringify(data, null, 2); // Convert the data to a nicely formatted JSON string)
	console.log(jsonString);

	const jsonObj = JSON.parse(jsonString);

	//Extract specific values 
	var newOccupied = data.occupied;
	var newVacant = data.vacant;
	var newRooms = data.ttlRooms;

	//Update chart
	setRooms(newRooms);
	setOccupied(newOccupied);
	setVacant(newVacant);


	document.getElementById('jsonResponseField').value = "JSON Response:\n" + jsonString;
	})

  .catch(error => console.error('Error:', error));
}

module.exports = parseLocalFile;