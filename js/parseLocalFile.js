function parseLocalFile(filename)
{
   fetch(`${filename}`)
	.then(response => response.json())
	.then(data => {

	console.log(data);

	const json = JSON.stringify(data, null, 2); // Convert the data to a nicely formatted JSON string)
	console.log(json);

	document.getElementById('jsonResponseField').value = "JSON Response:\n" + json;
	})

  .catch(error => console.error('Error:', error));
}

module.exports = parseLocalFile;