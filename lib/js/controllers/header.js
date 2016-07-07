'use strict';

(function () {
	'use strict';

	angular.module('lecture').controller('HeaderController', function (API) {

		var vm = this;

		getBlogs();

		function getBlogs() {
			var blogs = API.getBlogs();

			blogs.then(function (response) {
				vm.data = response.data.blogs;
			});
		}

		vm.saveBlog = function () {
			var savedBlog = API.saveBlog(vm.form);

			savedBlog.then(function (results) {
				console.log(results);
				getBlogs();
			});
		};
	});
})();