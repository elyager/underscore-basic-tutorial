var _ = require('underscore')

var initialize = function(){ 
	console.log('initialized') 
};
var initializeOnce = _.once(initialize);

initializeOnce();
initializeOnce(); //this one will never run