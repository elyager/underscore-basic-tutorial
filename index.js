var _ = require('underscore');

var integers = [1, 27, 91, 32, 86, 12, 8, 68, 97, 72, 50];
var integerLimit = 50;

//functional style
var topIntegers = _.filter(integers, function (item){ 
    return item > integerLimit;
});
// ##object oriented
var bottomIntegers = _(integers).filter(function (item){ 
    return item < integerLimit;
});
	
console.log(topIntegers);
console.log(bottomIntegers);