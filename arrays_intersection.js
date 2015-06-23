/* intersection regresa un arreglo con los valores que se intersectan en 
todos los arreglos enviados como parametros */
var _ = require('underscore');

var   tens = _.range(0, 100, 10)
	, eights = _.range(0, 100, 8)
	, fives = _.range(0, 100, 5);
 
var common = _.intersection(tens, eights, fives );

console.log(tens);
console.log(eights);
console.log(fives);
console.log(common + ' <-- intersection');
 