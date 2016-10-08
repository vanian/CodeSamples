//test link https://repl.it/DrCv/2
//find all keys in nested object of unkown depth
//find frequency of all keys in nested object of unkown depth
var objects = {
	"name":"div",
	"children":[ {"name":"div","children":[{"name":"span"},{"name":"image"}] },
		         {"name" : "span"},
		         {"name":"p","children":[{"name":"image"},{"name":"header"}]}
		     
	]
}
//solution
var arr=[],count={};//second sol
var test={};
function getAllKeys(obj) {
    for (var key in obj) {
        if (typeof obj[key] === "object") {
            getAllKeys(obj[key]);   
        } else {
        	arr.push(obj[key]); // second sol
            if(!test[obj[key]]){
            	
            	test[obj[key]]=1;
            }
            else
            test[obj[key]]+=1;
        }
    }
}
getAllKeys(objects);

//count freq of all elements in an array
arr.forEach(function(i) { count[i] = (count[i]||0)+1;  });

console.log(test);
console.log(count);
 
