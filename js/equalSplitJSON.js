function equalSplitJSON()
{
	var jsonObj = '{"ttlRooms": 300,"occupied": 150,"vacant": 150}';

   	var obj = JSON.parse(jsonObj);

	//Extract specific values 
	var occupied = obj.occupied;
	var vacant = obj.vacant;
	var ttlRooms = obj.ttlRooms;

	//Update chart
	setRooms(ttlRooms);
	setOccupied(occupied);
	setVacant(vacant);

	//Update Labels
	updateLabels();

	const json = JSON.stringify(obj, null, 2); // Convert the data to a nicely formatted JSON string)
	console.log(json);

	document.getElementById('jsonResponseField').value = "JSON Response:\n" + json;
	
}