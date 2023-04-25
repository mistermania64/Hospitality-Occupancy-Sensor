function parseLocalFile(filename)
{
   fetch(`${filename}`, {mode: 'cors'})
	.then(response => response.json())
	.then(data => {

	console.log(data);

	//Stringify, log string, and print in textarea
	const jsonString = JSON.stringify(data, null, 2); // Convert the data to a nicely formatted JSON string)
	console.log(jsonString);
	document.getElementById('jsonResponseField').value = "JSON Response:\n" + jsonString;

	//Extract specific values from Data
	newOccupied = data.occupied;
	newVacant = data.vacant;
	newRooms = data.ttlRooms;

	//Update chart
	setRooms(newRooms);
	setOccupied(newOccupied);
	setVacant(newVacant);

	//Update Labels
   updateLabels();
   
	})

  .catch(error => {
  	console.error('Error:', error)
  });

}

//module.exports = parseLocalFile;