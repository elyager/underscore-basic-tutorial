var _ = require('underscore')

var value = process.argv[2]//if not value by parameter set default 4

if (value == null) {
	value = 4;
	console.log('no value entered, set default 4');
}
else {
	console.log('value entered ', value)
}

var add2 = function (number){ 
	return number + 2 
};

var multiply3 = function (number){ 
	return number * 3 
};

var addAndMultiply = _.compose(add2, multiply3);

console.log('add 2 and multiply by 3 equals ' + addAndMultiply(value));