(function() {
    'use strict';
	angular
	.module('lecture')
	.controller('HeaderController', function(API,$scope) {

		let vm = this;

		getBlogs();

		function getBlogs(){
			var blogs = API.getBlogs();

			blogs.then(response => {
				vm.data = response.data.blogs;
			});
		}

		vm.saveBlog = function(){
			var savedBlog = API.saveBlog(vm.form);

			savedBlog.then(function(results){
				console.log(results);
				getBlogs();
			})
		}
		
	});
})();