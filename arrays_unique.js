var _ = require('underscore');
var numbers = [1,5,4,4,5,2,2,1,3,2,1,4,3,2,1,4,3,10,8,12]

var uniquesValues = _.unique(numbers)

console.log(numbers);
console.log(uniquesValues);