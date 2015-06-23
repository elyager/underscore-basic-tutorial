var _ = require('underscore');

var   tens = _.range(0, 100, 10)
	, eights = _.range(0, 100, 8)
	, fives = _.range(0, 100, 5);
 
var common = _.intersection(tens, eights, fives );
 
console.log(common);
 