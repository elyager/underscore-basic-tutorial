/*En muchas ocasiones determinar si dos objetos son idénticos no 
resulta sencillo ya que el operador == y === compara si las 
referencias apuntan al mismo objeto. */

var _ = require('underscore');

var anObject = {name: 'Joe', age: 21};
var aClone = {name: 'Joe', age: 21}
console.log(anObject == aClone)
/*false*/


var anObject = {name: 'Joe', age: 21}; 
var aClone = {name: 'Joe', age: 21}
console.log(_.isEqual(anObject, aClone));
/* true */