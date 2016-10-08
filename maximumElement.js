//Hackerrank maximum element - https://repl.it/Dc1K/0

function processData(input) {
    //Enter your code here
    input=input.split("\n"); var res = [], sortres=[];
    var num = parseInt(input.splice(0,1));
    
    for(i=0;i<input.length;i++)
        input[i]=input[i].split(" ");
 
    for(i=0;i<input.length;i++){
           input[i][0]=parseInt(input[i][0]);
        if(typeof input[i][1]!=='undefined')
            input[i][1]=parseInt(input[i][1]);
    }
//implementation of algorithm
    
    for(i=0;i<input.length;i++){
        if(input[i][0]==1){ //if query is 1
            res.push(parseInt(input[i][1]));
        }
        else if(input[i][0]==2){ //if query is 2
         res.splice(res.length-1,1);  
        }
        else if(input[i][0]==3){ //if query is 3
           
            console.log(Math.max.apply(null, res));
        }
    }
    
} 
