
const ones = [
	"", 
	"one", 
	"two", 
	"three", 
	"four", 
	"five", 
	"six", 
	"seven", 
	"eight", 
	"nine", 
	"ten", 
	"eleven", 
	"twelve", 
	"thirteen", 
	"fourteen",
	"fifteen",
	"sixteen",
	"seventeen",
	"eighteen",
	"nineteen",
];

const tens =[
	"",
	"",
	"twenty",
	"thirty",
	"fourty",
	"fifty",
	"sixty",
	"seventy",
	"eighty",
	"ninety",
	"hundred",
];

const scale = [
	"",
	"thousand",
	"million",
	"billion"
];

function numToWords(num = 0) {
	// zero
	if (num === 0) return "zilch";
	
	const numStr = num.toString();
	// pad to char count to a multiple of 3

	const paddedNumStr = "0".repeat(2 * numStr.length % 3) + numStr;

	// split every 3 characters
	const matches = paddedNumStr.match(/\d{3}/g) || []

	// too big
	if (matches.length > scale.length) return "Oh no! We can't support a number that big!";

	let output = matches.reduce((prev, curr, index) => {
		// if all zero skip
		if (curr === "000") return prev;

		if (Number(curr[0]) > 0) {
			// add the x hundred
			prev += ones[Number(curr[0])] + " " + tens[10];
			// 
			if (Number(curr.substr(1)) > 0) prev += " and";
		}
		// Figure out of we need an "and" when the first group is padded with zeros
		// it should be the last set of digits
		// but not if it's also the first group of digits
		// and it shouldn't be a "000" group
		else if (index !== 0 && matches.length - index - 1 === 0 && Number(curr.substr(1)) > 0){
			prev += "and"
		}

		// if the second and third digits together are < 20
		// populate from the 'ones' object 
		if (Number(curr.substr(1)) < 20) {
			prev += " " + ones[Number(curr.substr(1))];
		} else {
			// > 20 and we make up our number from tens and ones
			prev += " " + tens[Number(curr[1])];

			if (Number(curr[2]) !== 0) {
				prev += "-" + ones[Number(curr[2])];
			}
		}

		// add the scale - no scale for zero only groups
		if (index === 0 || Number(curr) > 0) {
			prev += " " + scale[matches.length - index - 1];
			if (matches.length > index + 1) prev += " ";
		}
			
		return prev;
		// Clean up the output - few dodgy spaces
	}, "").trim().replace(/  +/g, ' ');

	// Uppercase the first character
	return output.substr(0, 1).toUpperCase() + output.substr(1);
}

export default numToWords;