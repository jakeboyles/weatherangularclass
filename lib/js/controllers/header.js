'use strict';

(function () {
	'use strict';

	angular.module('lecture').controller('HeaderController', function (API) {

		var vm = this;

		vm.getNewForcast = function () {
			var forcast = API.getForcast(vm.cityName);

			forcast.then(function (response) {
				vm.data = response.data.list;
			});
		};
	});
})();