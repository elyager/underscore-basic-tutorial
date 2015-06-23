/*throttle le agrega a la funcion un tiempo determinado que
tiene que esperan antes de que pueda volver a ser ejecutada
en este caso solo puede ser ejecutada cada 3 segundos y no 1
como lo establece el intervalo */
var _ = require('underscore');

var render = function(){ 
	console.log('render function') 
};
var renderThrottled = _.throttle(render, 3000);
setInterval(renderThrottled, 1000);