// JavaScript Document

//Global Variables
let occupied, vacant, ttlRooms;

occupied = 150;
vacant = 150;
ttlRooms = 300; //Default 100

function updateLabels()
{
	updateVacantText();
	updateOccupiedText();
	updateRoomsText();
}

function updateOccupiedText()
{
	document.getElementById('ttlOccupiedText').innerHTML = getOccupied(); 
}

function updateVacantText()
{
	document.getElementById('ttlVacantText').innerHTML = getVacant(); 
}

function updateRoomsText()
{
	document.getElementById('ttlRoomsText').innerHTML = getRooms(); 
}

// Total Occupant Functions
function addRooms(value)
{
	ttlRooms += value;
}

function removeRooms(value)
{
	ttlRooms -= value;
}

function getRooms()
{
	return ttlRooms;
	// alert("Current Occupants: " + document.getElementById('ttlRoomsText').innerHTML);
}

function setRooms(newRoomVal)
{

	if (!Number.isInteger(newRoomVal))
		console.log("Please enter an integer value.")

  else
  {

	  if (newRoomVal < ttlRooms)
		{
			ttlRooms = newRoomVal; //Update ttlRooms
			addOccupied((-getOccupied())); //Zero out occupied
			addVacant(((-getVacant()))); //Zero out Vacant
			addVacant(newRoomVal); //Assign remainder to vacant
		}

		else if (newRoomVal == ttlRooms)
			console.log("Value is unchanged.");
		
		else
		{
			var toBeAssigned = Math.abs(newRoomVal - ttlRooms); //Extra occupants must be assigned to either vacant or occupied
			var sortingHat = Math.floor(Math.random() * 2);

			if(sortingHat == 0)
				//vacant += toBeAssigned;
				addVacant(toBeAssigned);


			else
				//occupied += toBeAssigned;
				addOccupied(toBeAssigned);

			//ttlRooms = newRoomVal;

			//addRooms(toBeAssigned);


		}

  }

}

// Occupied Functions
function makeOccupied()
{

	if(occupied == ttlRooms)
	{
		console.log("All rooms are already occupied.");
	}

	else
	{
		occupied +=1;
		myChart.data.datasets[0].data[0] += 1;

		vacant -=1;
		myChart.data.datasets[0].data[1] -= 1;

		myChart.update();
		updateLabels();
	}

}

// function addOccupied(newOccupied)
// {
// 	occupied += newOccupied;
// 	addRooms(newOccupied); //ttlRooms += newOccupied
// 	myChart.data.datasets[0].data[0] += newOccupied;

// 	console.log("ttlRooms: " + ttlRooms)
// 	console.log(occupied);
// 	myChart.update();
// 	updateLabels();
// }

// function removeOccupied(newOccupied)
// {
// 	occupied -= newOccupied;
// 	removeRooms(newOccupied); //ttlRooms -= newOccupied
// 	myChart.data.datasets[0].data[0] -= newOccupied;

// 	console.log("ttlRooms: " + ttlRooms)
// 	console.log(occupied);
// 	myChart.update();
// 	updateLabels();
// }

function getOccupied()
{
	return occupied;
}

function setOccupied(newOccupied)
{
	if (newOccupied > ttlRooms){
		console.log("New value cannot be greater than total occupants.");
	}

	// if (vacant - newOccupied < 0)
	// {
	// 	console.log("Error");
	// }

	else {
		occupied = newOccupied;
		//vacant -= newOccupied;
		myChart.data.datasets[0].data[0] = occupied;
		myChart.update();
		// updateLabels();
	}
}

function addOccupiedRoom()
{
	occupied += 1;
	addRooms(1); //ttlRooms += newOccupied
	myChart.data.datasets[0].data[0] += 1;

	myChart.update();
	updateLabels();
}

function addVacantRoom()
{
	vacant += 1;
	addRooms(1); //ttlRooms += newOccupied
	myChart.data.datasets[0].data[1] += 1;

	myChart.update();
	updateLabels();
}


// Vacant Functions
function makeVacant()
{
	if(vacant == ttlRooms)
	{
		console.log("All Rooms Already Vacant!");
	}

	else
	{
		vacant +=1;
		myChart.data.datasets[0].data[1] += 1;

		occupied -=1;
		myChart.data.datasets[0].data[0] -= 1;

		myChart.update();
		updateLabels();
	}
}

// function addVacant(newVacant)
// {
// 	vacant += newVacant;
// 	addRooms(newVacant); //ttlRooms += newVacant;
// 	myChart.data.datasets[0].data[1] += newVacant;

// 	console.log(vacant);
// 	console.log("ttlRooms: " + ttlRooms)
// 	myChart.update();
// 	updateLabels();
// }

// function removeVacant(newVacant)
// {
// 	vacant -= newVacant;
// 	removeRooms(newVacant); //ttlRooms -= newVacant;
// 	myChart.data.datasets[0].data[1] -= newVacant;

// 	console.log(vacant);
// 	console.log("ttlRooms: " + ttlRooms)
// 	myChart.update();
// 	// updateLabels();
// }

function getVacant()
{
	return vacant;
}


function setVacant(newVacant)
{
	if (newVacant > ttlRooms){
		console.log("New value cannot be greater than total occupants.");
	}

	// if (occupied - newVacant < 0)
	// {
	// 	console.log("Error");
	// }

	else {
		vacant = newVacant;
		//occupied -= newVacant;
		myChart.data.datasets[0].data[1] = vacant;
		myChart.update();
		// updateLabels();
	}
}

function autoResize() 
{
  var textarea = document.getElementById("jsonResponseField");
  textarea.style.height = "auto";
  textarea.style.height = textarea.scrollHeight + "px";
  console.log("Auto Resize called");
}

function searchFloor(floorNum)
{
	let input = document.getElementById('floorSearch').value
      
	document.getElementById('floorText').innerHTML = floorNum;
	document.getElementById('floorText').value = floorNum;
}