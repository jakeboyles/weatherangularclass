(function() {
  
  'use strict';

  angular
  .module('lecture')
  .factory('API', ($http) => {

    var token = 'N5JGY3RWWTW51XZTYVSN';

    function getBlogs()
    {
        var call = $http({
          method: 'GET',
          headers: {
            X_CSRF_TOKEN:token,
          },
          url: `https://tiyagencyweek.herokuapp.com/blogs`
        });

        return call;
    }

    function saveBlog(data)
    {
      var call = $http({
          method: 'POST',
          data:data,
          headers: {
            X_CSRF_TOKEN:token,
          },
          url: `https://tiyagencyweek.herokuapp.com/blogs/create`
        });

        return call;
    }


    function getWeather(city)
    {

      var call = $http({
          url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=7cf16558d759d14815306832bd7341e2&units=imperial`
        });

      return call;
      
    }

    return {
      getBlogs:getBlogs,
      saveBlog:saveBlog,
      getWeather
    };

  })

})();