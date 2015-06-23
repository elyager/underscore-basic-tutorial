/* range sirve para generar un array con determinado rango de números he incluso 
a determinados intervalos*/
var _ = require('underscore');
var numbers = [];

numbers[0] = _.range(10); //del 0 al 9
numbers[1] = _.range(0, 10); //del 0 al 9
numbers[2] = _.range(1, 11); //del 1 al 10
numbers[3] = _.range(1, 11, 2); //del 1 al 10 en saltos de dos

console.log(numbers);