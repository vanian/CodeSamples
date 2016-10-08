//understanding NAN and isNAN - https://repl.it/DEda/2

console.log('everything about NaN and isNaN');
console.log("all these are NaNs"+ '\n'+
	Math.sqrt(-2) + '\n' +
	Math.log(-1) + "\n" +
	0/0 + "\n" +
	parseFloat('foo') //NaN
	);
	
	console.log("but.... typeof NaN : " +typeof NaN);  //Number

console.log(NaN == NaN); //false
console.log(NaN === NaN);  //false
console.log(NaN == "");  //false
console.log(isNaN(NaN));      // true
console.log(isNaN('hello'));  // true
console.log(isNaN(['x']));    // true
console.log(isNaN({})); //true
console.log(isFinite(0)); //true
console.log(isFinite("r")); //false
console.log(isFinite(0/0)); //false
console.log(isFinite(0/1)); // true

var My = {
  isNaN: function (x) { return x !== x; }
}
My.isNaN = function(x) { return typeof x === 'number' && isNaN(x); };

console.log(Number.isNaN(NaN));            // true
console.log(Number.isNaN(Math.sqrt(-2)));  // true
console.log(Number.isNaN('hello'));        // false
console.log(Number.isNaN(['x']));          // false
console.log(Number.isNaN({}));             // false

var r = 9;
isNaN(r);
