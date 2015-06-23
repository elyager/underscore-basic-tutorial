var _ = require('underscore');

var anObject = {
	name: 'Joe', 
	age: 21
};

var aClone = _.clone(anObject);


/* Crea una copia de un objeto. Esta función se debe usar con precaución, 
ya que si el objeto contiene un array y otro objeto anidado, 
se crea una copia de la referencia al objeto y no una copia de este.*/

var anObjectWithArray = {
    name: 'Joe',
    age: 21,
    nestedObject: { aKey: 'aValue' }
};

var aCloneWithArray = _.clone(anObjectWithArray);
aCloneWithArray.nestedObject.aKey = 'anotherValue';
console.log(aCloneWithArray.nestedObject.aKey);