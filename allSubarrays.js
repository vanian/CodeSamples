//create all possible subarrays - https://repl.it/DMIQ/0

var combine = function(a, min) {
    var fn = function(n, src, got, all) {
        if (n === 0) {
            if (got.length > 0) {
                all[all.length] = got;
            }
            return;
        }
        for (var j = 0; j < src.length; j++) {
            fn(n - 1, src.slice(j + 1), got.concat([src[j]]), all);
        }
        return;
    };
    var all = [];
    for (var i = min; i < a.length; i++) {
        fn(i, a, [], all);
    }
    all.push(a);
    return all;
} ;

function product(array){  var p = 1;
for (i = 0; i < array.length; i += 1) {p *= array[i];    } return p; }


function count(numbers, k) {
var m = combine(numbers,1);

return m;
	
}
var arrayaaa = [1,3,4,5,6];
count(arrayaaa);

