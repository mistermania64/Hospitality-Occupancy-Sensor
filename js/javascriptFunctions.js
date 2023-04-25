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
	// alert("Current Rooms: " + document.getElementById('ttlRoomsText').innerHTML);
}

function setRooms(newRoomVal)
{

	if (!Number.isInteger(newRoomVal))
		console.log("Please enter an integer value.")

	else if (newRoomVal <= 0)
	{
			console.log("Error: Cannot have 0 rooms.");
	}

  else
  {

	  if (newRoomVal < ttlRooms)
		{
			//Get difference between values
			var tempSub = ttlRooms - newRoomVal;

			//Subtract difference from occupied, if unable, vacant
			for (let i = 1; i <= tempSub; i++)
			{
				if (occupied > 0)
					occupied -= 1;

				else if (occupied <= 0 && vacant > 0)
					vacant -= 1;

				else //NOTE: This shouldn't ever happen
				{
					console.log("ERROR: New room value is greater than sum of both categories");
					break;
				}

			} // end for loop
			
		}

		else if (newRoomVal == ttlRooms)
			console.log("Value is unchanged.");
		
		else //newRoomVal > ttlRooms
		{
			var toBeAssigned = Math.abs(newRoomVal - ttlRooms); //Extra occupants must be assigned to either vacant or occupied
			var sortingHat = Math.floor(Math.random() * 2);

			for(let i = 1; i <= toBeAssigned; i++)
			{
				if(sortingHat == 0)
					vacant += 1;
					//addVacant(toBeAssigned);


				else
					occupied += 1;
					//addOccupied(toBeAssigned);
			}

		}

		ttlRooms = newRoomVal; //Update ttlRooms value
		//Call UpdateLabels() from calling function

  }

}

// Occupied Functions
function addOccupiedRooms(value)
{
	if ((ttlRooms + value) <= 0)
	{
			console.log("Error: Cannot have 0 rooms.");
	}

	else
	{
			occupied += value;
			addRooms(value); //ttlRooms += newOccupied
			myChart.data.datasets[0].data[0] += value;

			myChart.update();
			updateLabels();
	}

}

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

function getOccupied()
{
	return occupied;
}

function setOccupied(newOccupied)
{
	if (!Number.isInteger(newOccupied))
	{
		console.log("Please enter an integer value.")
	}

	else if (newOccupied > ttlRooms){
		console.log("New value cannot be greater than total rooms.");
	}


	else {
		occupied = newOccupied;
		myChart.data.datasets[0].data[0] = occupied;
		myChart.update();
	}

}

// Vacant Functions
function addVacantRooms(value)
{
	if ((ttlRooms + value) <= 0)
	{
			console.log("Error: Cannot have 0 rooms.");
	}

	else
	{	
			vacant += value;
			addRooms(value); //ttlRooms += newOccupied
			myChart.data.datasets[0].data[1] += value;

			myChart.update();
			updateLabels();
	}
}

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

function getVacant()
{
	return vacant;
}


function setVacant(newVacant)
{
	if (!Number.isInteger(newVacant))
	{
		console.log("Please enter an integer value.")
	}

	else if (newVacant > ttlRooms){
		console.log("New value cannot be greater than total rooms.");
	}

	else {
		vacant = newVacant;
		myChart.data.datasets[0].data[1] = vacant;
		myChart.update();
	}

}


//Unused Functions
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