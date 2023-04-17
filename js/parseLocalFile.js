function parseLocalFile(filename)
{
   fetch(`${filename}`, {mode: 'cors'})
	.then(response => response.json())
	.then(data => {

	console.log(data);


	const jsonObj = JSON.parse(data);

	//Extract specific values 
	var occupied = obj.occupied;
	var vacant = obj.vacant;
	var occupants = obj.occupants;

	//Update chart
	setOccupants(occupants);
	setOccupied(occupied);
	setVacant(vacant);

	const json = JSON.stringify(data, null, 2); // Convert the data to a nicely formatted JSON string)
	console.log(json);

	document.getElementById('jsonResponseField').value = "JSON Response:\n" + json;
	})

  .catch(error => console.error('Error:', error));
}

module.exports = parseLocalFile;