/*difference regresa un arreglo con los números que son diferentes entre el primer
arreglo y un n número de arreglos*/

var _ = require('underscore');
var array1 = [1,2,3,4,5,6,7], 
	array2 = [5,2,10], 
	array3 = [6,13,21];

// var array1 = ['uno','dos','doce','trece'], 
// 	array2 = ['uno','dos','tres'], 
// 	array3 = ['uno','dos','seis'];

var difference = _.difference(array1, array2, array3);

console.log(array1);
console.log(array2);
console.log(array3);
console.log(difference + ' <-- difference');
