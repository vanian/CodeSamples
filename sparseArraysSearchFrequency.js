//CHALLENGE:  https://www.hackerrank.com/challenges/sparse-arrays
//test - https://repl.it/DcYO/2

function processData(input) {
    //Enter your code here
   input =  input.split(" ");
    var string = [],queries=[], stringnum=parseInt(input[0]),querynum=0,output=[];
    for(i=1;i<=stringnum;i++){
        string.push(input[i]);
    }
   querynum=parseInt(input[stringnum+1]);
    var queryStartsAt = stringnum+2;
    for(i=queryStartsAt;i<input.length;i++){
        queries.push(input[i]);
    }
    for(i=0;i<queries.length;i++){
        for(j=0;j<string.length;j++){
            if(queries[i]==string[j]){
                if(typeof output[i]=='undefined'){
                    output[i]=1;
                }
                else{
                output[i] = output[i]+1;
                   
                }
            }
        }
    }
    for(i=0;i<queries.length;i++){
        if(typeof output[i] !== 'undefined')
          console.log(queries[i]+" : "+output[i]);
        else
           console.log(queries[i]+" : "+0);
    }
} 

processData("4 aba baba aba xzxb 3 aba xzxb ab")
