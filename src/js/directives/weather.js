(function() {
    'use strict';
	angular.module('lecture')
	.directive('weather', function (API) {

  return {
    restrict: 'E',
    scope: {}, 
    replace: false, 
    template: '<div>THE TEMP IS: {{temp}} in {{city}}</div>',
    transclude: true,

    // link method
    link: function (scope, element, attrs ){
    	var weather = API.getWeather(attrs.city);
    	scope.city = attrs.city;

    	weather.then(function(response){
    		scope.temp = response.data.main.temp;
    	})
    }
  };
});
})();