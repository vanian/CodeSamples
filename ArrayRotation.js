//Array Rotation  Shift HackerRank - https://repl.it/DcTX/2

function processData(input) {
    //Enter your code here
    var array = [],resultArray = [],shift=[];
    input=input.replace("\n"," ").split(" ");
    var len = parseInt(input[0]);
     var shiftAt = parseInt(input[1]);
 
    for(i=2;i<input.length;i++){   
        array.push(parseInt(input[i]));
        }
    for(i=0;i<array.length;i++){
       if(i>=shiftAt){   
           shift.push(array[i]);
       }       
        
    }
    array.unshift(shift.join(" "));
    
  resultArray = array.join(" ").split(" ");
    //resultArray=resultArray.subarray(0,input.length);
resultArray.splice(len,shift.length);
 console.log(resultArray.join(" "));
} 
processData("20 10\n41 73 89 7 10 1 59 58 84 77 77 97 58 1 86 58 26 10 86 51");

//output 77 97 58 1 86 58 26 10 86 51 41 73 89 7 10 1 59 58 84 77
/*Question A left rotation operation on an array of size  shifts each of the array's elements  unit to the left. For example, if left rotations are performed on array , then the array would become .

Given an array of  integers and a number, , perform  left rotations on the array. Then print the updated array as a single line of space-separated integers.

Input Format

The first line contains two space-separated integers denoting the respective values of  (the number of integers) and  (the number of left rotations you must perform). 
The second line contains  space-separated integers describing the respective elements of the array's initial state.

Output Format

Print a single line of  space-separated integers denoting the final state of the array after performing  left rotations. */
