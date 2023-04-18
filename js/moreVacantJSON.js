function moreVacantJSON()
{
	var jsonObj = '{"ttlOccupants": 300, "occupied": 15, "vacant": 285}';

    var obj = JSON.parse(jsonObj);

	//Extract specific values 
	var occupied = obj.occupied;
	var vacant = obj.vacant;
	var ttlOccupants = obj.ttlOccupants;

	//Update chart
	setOccupants(ttlOccupants);
	setOccupied(occupied);
	setVacant(vacant);

	//JSON.stringify(value, replacer, space)
	const json = JSON.stringify(obj, null, 2); // Convert the data to a nicely formatted JSON string)
	console.log(json);

	document.getElementById('jsonResponseField').value = "JSON Response:\n" + json;
	
}