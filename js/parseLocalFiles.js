function parseLocalFile(filename)
{
   fetch(`${filename}`)
	.then(response => response.json())
	.then(data => console.log(data));
}