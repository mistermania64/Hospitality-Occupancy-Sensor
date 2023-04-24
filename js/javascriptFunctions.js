// JavaScript Document

//Global Variables
let occupied, vacant, ttlOccupants;

occupied = 150;
vacant = 150;
ttlOccupants = 300; //Default 100

function updateLabels()
{
	updateVacantText();
	updateOccupiedText();
	updateOccupantsText();
}

function updateOccupiedText()
{
	document.getElementById('ttlOccupiedText').innerHTML = getOccupied(); 
}

function updateVacantText()
{
	document.getElementById('ttlVacantText').innerHTML = getVacant(); 
}

function updateOccupantsText()
{
	document.getElementById('ttlOccupantsText').innerHTML = getOccupants(); 
}

// Total Occupant Functions
function addOccupants(value)
{
	ttlOccupants += value;
}

function removeOccupants(value)
{
	ttlOccupants -= value;
}

function getOccupants()
{
	return ttlOccupants;
	// alert("Current Occupants: " + document.getElementById('ttlOccupantsText').innerHTML);
}

function setOccupants(newOccupantVal)
{

	if (!Number.isInteger(newOccupantVal))
		console.log("Please enter an integer value.")

  else
  {

	  if (newOccupantVal < ttlOccupants)
		{
			ttlOccupants = newOccupantVal; //Update ttlOccupants
			addOccupied((-getOccupied())); //Zero out occupied
			addVacant(((-getVacant()))); //Zero out Vacant
			addVacant(newOccupantVal); //Assign remainder to vacant
		}

		else if (newOccupantVal == ttlOccupants)
			console.log("Value is unchanged.");
		
		else
		{
			var toBeAssigned = Math.abs(newOccupantVal - ttlOccupants); //Extra occupants must be assigned to either vacant or occupied
			var sortingHat = Math.floor(Math.random() * 2);

			if(sortingHat == 0)
				//vacant += toBeAssigned;
				addVacant(toBeAssigned);


			else
				//occupied += toBeAssigned;
				addOccupied(toBeAssigned);

			//ttlOccupants = newOccupantVal;

			//addOccupants(toBeAssigned);


		}

  }

}


// Occupied Functions
function addOccupied(newOccupied)
{
	occupied += newOccupied;
	addOccupants(newOccupied); //ttlOccupants += newOccupied
	myChart.data.datasets[0].data[0] += newOccupied;

	console.log("ttlOccupants: " + ttlOccupants)
	console.log(occupied);
	myChart.update();
	updateLabels();
}

function removeOccupied(newOccupied)
{
	occupied -= newOccupied;
	removeOccupants(newOccupied); //ttlOccupants -= newOccupied
	myChart.data.datasets[0].data[0] -= newOccupied;

	console.log("ttlOccupants: " + ttlOccupants)
	console.log(occupied);
	myChart.update();
	updateLabels();
}

function getOccupied()
{
	return occupied;
}

function setOccupied(newOccupied)
{
	if (newOccupied > ttlOccupants){
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


// Vacant Functions
function addVacant(newVacant)
{
	vacant += newVacant;
	addOccupants(newVacant); //ttlOccupants += newVacant;
	myChart.data.datasets[0].data[1] += newVacant;

	console.log(vacant);
	console.log("ttlOccupants: " + ttlOccupants)
	myChart.update();
	updateLabels();
}

function removeVacant(newVacant)
{
	vacant -= newVacant;
	removeOccupants(newVacant); //ttlOccupants -= newVacant;
	myChart.data.datasets[0].data[1] -= newVacant;

	console.log(vacant);
	console.log("ttlOccupants: " + ttlOccupants)
	myChart.update();
	// updateLabels();
}

function getVacant()
{
	return vacant;
}


function setVacant(newVacant)
{
	if (newVacant > ttlOccupants){
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