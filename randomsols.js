//Random solutions Yahoo sample interview

//count # of words without split 
//first and last space invalid
var str = "count # of words without split";
var count=0;
for(i=1;i<str.length;i++){
	if(str[i]==' '){
		if(str[i+1]){
		count+=1;
		}
	}
}
console.log("count # of words without split : " + count+1);

//string reverse
console.log("string reverse: " + str.split("").reverse().join(""));
//string reverse each individual word:
var rev = str.split(" ");
for(i=0;i<rev.length;i++){
	rev[i]=rev[i].split("").reverse().join("");
}
console.log("string reverse each individual word: " + rev.join(" "));

//merge objects

function objectMerge(objectArray) {
    var combined={};
    function MergeRecursive(obj1, obj2) {
    	for (var p in obj2) {
    		try {
      // Property in destination object set; update its value.
      if ( obj2[p].constructor==Object ) {
        obj1[p] = MergeRecursive(obj1[p], obj2[p]);

      } else {
        obj1[p] = obj2[p];
      }
    } catch(e) {
      // Property in destination object not set; create it and set its value.
      obj1[p] = obj2[p];
    }
  }
  return obj1;
}
for(i=0;i<=objectArray.length;i++){
   // combined = Object.assign(combined, objectArray[i]);
    combined=MergeRecursive(combined,objectArray[i]);
}
    return combined;
}

//
function arrayReverse(stringArr) {
	var reversed;

    // Put reversal code here
    if(stringArr.length%2===0){
        return stringArr.join("");
    }
    else{
    return stringArr.reverse().join("");
    }
}
//call backs



//merge sorted arrays into sorted array
function merge(A, m, B, n) {
    var i = m - 1;
    var j = n - 1;
    var k = m + n - 1;
 
    while (k >= 0) {
        if (j < 0 || (i >= 0 && A[i] > B[j]))
            A[k--] = A[i--];
        else
            A[k--] = B[j--];
    }
    return A;
}

console.log(merge([1,2,5,8], 4, [2,4,6,7], 4));
