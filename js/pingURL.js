//Javascript Document

/*
 NOTE: Could not make data from API Ping global. Therefore,
 all of the operations on the data are defined within the 'data => { }'
 block. This is messy and should be cleaned up later, but it works for now.
 */

let globalData;

function pingURL()
{
	var urlInput = document.getElementById("urlInput");
	var urlToPing = urlInput.value;

	fetch(`${urlToPing}`)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
    //document.getElementById('jsonResponseField').value = response.json();
  })
  .then(data => {

    // globalData = data; //Make data global
  	// console.log(globalData);

    //Log to console
    console.log("Raw data: " + data);

    //Stringify, log string, and print in textarea
    const jsonString = JSON.stringify(data, null, 2); // Convert the data to a nicely formatted JSON string)
    console.log(jsonString); //Log String in Console
    document.getElementById('jsonResponseField').value = "JSON Response:\n" + jsonString; //Print in textarea

    //Extract specific values from Data
    newOccupied = data.occupied;
    getOccupied();
    newVacant = data.vacant;
    getVacant();
    newRooms = data.ttlRooms;
    getRooms();

    //Update chart
    setRooms(newRooms);
    setOccupied(newOccupied);
    setVacant(newVacant);

    //Update Labels
    updateLabels();

	})

  .catch(error => {
    // console.error('Error:', error);
    console.error(error);
  });

  // //Stringify, log, and print in textarea
  // const jsonString = JSON.stringify(globalData, null, 2); // Convert the data to a nicely formatted JSON string)
  // console.log(jsonString); //Log in Console
  // document.getElementById('jsonResponseField').value = "JSON Response:\n" + jsonString; //Print in textarea

  // //Extract specific values from Data
  // var occupied = globalData.occupied;
  // var vacant = globalData.vacant;
  // var rooms = globalData.ttlRooms;

  // //Update chart
  // setRooms(rooms);
  // setOccupied(occupied);
  // setVacant(vacant);

  // console.log(globalData);
}

function displayJSONResponse(jsonString)
{
	//Maybe use later
}