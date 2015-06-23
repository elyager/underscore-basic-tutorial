var _ = require('underscore');
var array1 = [1,2,3,4,5,6,7], 
	array2 = [5,2,10], 
	array3 = [6,13,21];

var difference = _.difference(array1, array2, array3);

console.log(array1);
console.log(array2);
console.log(array3);
console.log(difference + '<-- difference');