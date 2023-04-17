const path = require('path');
const parseLocalFile = require('../js/parseLocalFile.js');

describe('file extension test', () => 
	{
		it('checks if file extension is .json', () => {
			const filePath = '../json/testFile.json';
			const extension = path.extname(filePath);
			expect(extension).toBe('.json');
		});
	});

// console.log(parseLocalFile('../json/moreOccupied.json'));
// console.log(parseLocalFile('../json/JSON2.json'));