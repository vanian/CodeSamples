//hoisting example - test - https://repl.it/DqDP/2

//usual way
var x = 7, y = 8;
console.log(x,y);


//undefined:
var a,b; //declared but not initialized
console.log(a,b);
a=6;b=8;

//hoisting
m =8;n=9; //initialized but not declared
console.log(m,n)
var m,n; //optional

