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

    return {
      getBlogs:getBlogs,
      saveBlog:saveBlog,
    };

  })

})();