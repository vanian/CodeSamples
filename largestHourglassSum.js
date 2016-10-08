//largest sum of hourglass - https://repl.it/DbuA/0

var hour = function(arr) {

   var maxval = [],sum=0;
   for(i=0;i<arr.length;i++){
        for(j=0;j<arr[i].length;j++){
            if(i<arr.length && j<arr.length && i+1<arr.length && j+1<arr.length && i+2<arr.length && j+2<arr.length){
                sum=(arr[i][j]+arr[i][j+1]+arr[i][j+2]+arr[i+1][j+1]+arr[i+2][j]+arr[i+2][j+1]+arr[i+2][j+2]);
                maxval.push(sum);
            }
        }
    }

maxval.sort(function(a, b){return a-b}); 

console.log(maxval[maxval.length-1]);
}
    hour([[1,1,1,0,0,0],[0,1,0,0,0,0],[1,1,1,0,0,0],[0,0,2,4,4,0],[0,0,0,2,0,0],[0,0,1,2,4,0]]);

