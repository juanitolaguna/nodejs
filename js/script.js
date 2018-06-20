
/*===============================
		   simple loop
===============================*/

// for (let i = 0; i <= 100; i++) {
// 	console.log(i);
// }

// for (let i = 0; i<100 ; i++) {
// 	console.log(i);
// }

/*===============================
		   switch case
===============================*/


/*
switch(prompt("Whats the weather like?")){
	case "rainy":
		console.log("remember an umbrella");
		break;
	case "sunny":
		console.log("go outside");
		break;
	default:
		console.log("Unknown weathe type");
		break;
	}
*/

/*===============================
			triangle
===============================*/

/*

function tri2(x){
	for (let i = 0; i<x; i++){
		let x = '#';
		for (let y = 0; y<i; y++) {
			x += '#';
		}
		console.log(x);
	}
}


function tri(x){
	for (let i = 0; i<x; i++){
		console.log('#'.repeat(i));
	}
}


console.log('hello '.repeat(3))

*/


/*		sehr gut		*/
// for (let line = "#"; line.length < 8; line += "#")
//   console.log(line);

/*===============================
			fizzbuzz
===============================*/


/*
for (let n = 1; n <= 100; n++) {
  let output = "";
  if (n % 3 == 0) output += "Fizz";
  if (n % 5 == 0) output += "Buzz";
  console.log(output || n);
}


for(let i = 0; i<100; i++) 
	console.log((i%3 == 0 ? 'fizz': '') + (i%5 == 0 ? 'buzz': '') || i);

*/


/*===============================
  different amount of arguments
===============================*/
/*

function minus(a, b) { 
	if (b === undefined) return -a; 
	else return a - b; 
}

*/


/*===============================
  			closures
===============================*/
/*

function multiplier(factor) { 
	return number => number * factor;
 }

let twice = multiplier(2); 
console.log(twice(5));

































