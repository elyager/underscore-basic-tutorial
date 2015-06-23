/* regresa un arreglo con los valores que no se repiten en el arreglo
pasado como parametro */

var _ = require('underscore');
var numbers = [0,1,5,4,4,5,2,2,1,3,2,1,4,3,2,1,4,3,10,8,12]

var uniquesValues = _.unique(numbers)

console.log(numbers);
console.log(uniquesValues);