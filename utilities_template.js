var _ = require('underscore');

var data = {name: 'World'};
var template = 'Hello <%= name %>!';
var parsedTemplate = _.template(template, data);
 
console.log(parsedTemplate);
/* Hello World! */