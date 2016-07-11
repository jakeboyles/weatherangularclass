'use strict';

(function () {
  'use strict';

  angular.module('lecture').directive('blogItem', function () {

    return {
      restrict: 'E',
      replace: true,
      template: '<div><h3>{{item.title}}</h3><p>{{item.description}}</p></div>',
      transclude: true,

      // link method
      link: function link(scope, element, attrs) {

        var blog = attrs.blog;
        blog = JSON.parse(blog);
        scope.item = blog;
      }
    };
  });
})();