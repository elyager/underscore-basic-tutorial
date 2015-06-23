var _ = require('underscore');

var Tuts = [
{name : 'NetTuts', niche : 'Web Development'}, 
{name : 'WPTuts', niche : 'WordPress'}, 
{name : 'PSDTuts', niche : 'PhotoShop'}, 
{name : 'AeTuts', niche : 'After Effects'}];

var niches = _.pluck(Tuts, 'niche');
 
console.log(niches);