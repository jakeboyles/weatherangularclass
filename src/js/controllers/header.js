(function() {
    'use strict';
	angular
	.module('lecture')
	.controller('HeaderController', function(API) {

		let vm = this;

		vm.getNewForcast = function(){
			var forcast = API.getForcast(vm.cityName);

			forcast.then(response => {
			  vm.data = response.data.list
			});
		}
	});
})();