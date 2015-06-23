var _ = require('underscore');

var objectA = {
    aFunction: function() { 
    	console.log('objectA function');
    },
    anAttribute: 'foo'
};
var objectB = {
    anotherFunction: function() {
    	console.log('objectB function');
    },
    anotherAttribute: 'bar'
};
_.extend(objectA, objectB);


objectA.anotherFunction();
console.log(objectA.anotherAttribute);