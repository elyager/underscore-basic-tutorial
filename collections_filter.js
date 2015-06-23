/*filter (Alias: select) sirve para filtrar cada uno de los elementos de una
colección a traves de ciertos condicionales */

var _ = require('underscore');
var scores = [84, 99, 91, 65, 87, 55, 72, 68, 95, 42], 
	topScorers = [], 
	scoreLimit = 90;

topScorers = _.filter(scores, function (score){ 
    return score > scoreLimit;
});
console.log(topScorers);

//using alias select
topScorers = _.select(scores, function (score){ 
	return score > scoreLimit;
});
console.log(topScorers);