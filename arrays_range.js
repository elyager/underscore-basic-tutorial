var _ = require('underscore');
var numbers = []

numbers[0] = _.range(10);
numbers[1] = _.range(0, 10);
numbers[2] = _.range(1, 11);
numbers[3] = _.range(1, 11, 2);

console.log(numbers);