(function() {
  
  'use strict';

  angular
  .module('lecture')
  .factory('API', ($http) => {

    function getForcast(city)
    {
        var call = $http({
          method: 'GET',
          url: `http://api.openweathermap.org/data/2.5/forecast/daily?q=${city},US&cnt=6&APPID=7cf16558d759d14815306832bd7341e2&units=imperial`
        });
        return call;
    }

    return {
      getForcast:getForcast,
    };

  })

})();