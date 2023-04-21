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
	var occupied = jsonObj.occupied;
	var vacant = jsonObj.vacant;
	var occupants = jsonObj.ttlOccupants;

	//Update chart
	setOccupants(occupants);
	setOccupied(occupied);
	setVacant(vacant);


	document.getElementById('jsonResponseField').value = "JSON Response:\n" + jsonString;
	})

  .catch(error => console.error('Error:', error));
}

module.exports = parseLocalFile;