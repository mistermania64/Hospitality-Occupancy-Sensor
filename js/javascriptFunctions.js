// JavaScript Document
function myFunction()
{
	console.log("Hello World!");
}

function setOccupants(occupants)
{
	// if (occupants) isn't integer
	// occupants = 0;
	// else
	
	document.getElementById('occupantsText').innerHTML = occupants;
	document.getElementById('occupantsText').value = occupants;
}

function getOccupants()
{
	alert("Current Occupants: " + document.getElementById('occupantsText').innerHTML);
}

function searchFloor(floorNum)
{
	let input = document.getElementById('floorSearch').value
      
	document.getElementById('floorText').innerHTML = floorNum;
	document.getElementById('floorText').value = floorNum;
}