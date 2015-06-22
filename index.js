var _ = require('underscore');

var clienList = [
    {name:'Juan' , city:'Obregon', age:27},
    {name:'Peter', city:'Obregon', age:31},
    {name:'Ana'  , city:'Barcelona', age:28},
    {name:'Oscar', city:'Obregon', age:24},
    {name:'Dani' , city:'Bilbao', age:43},
    {name:'Pedro', city:'Valencia', age:25},
    {name:'Pablo', city:'Sevilla' , age:27},
    {name:'Marta', city:'Sevilla' , age:32}
];

var ObregonClients = _.where(clienList, {city: 'Obregon'});
console.log(ObregonClients);

ObregonClients = _(ObregonClients).sortBy(function(client){
	return client.age;
});

console.log(ObregonClients);
/*
[ {name:'Juan' , city:'Obregon', age:27},
  {name:'Peter', city:'Obregon', age:31},
  {name:'Oscar', city:'Obregon', age:24},
];
*/