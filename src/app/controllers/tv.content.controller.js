(function () {
    'use strict';

    angular
        .module('app')
        .controller('TvContentController', TvContentController);

    /** @ngInject */
    function TvContentController($stateParams, $http, ServerURL) {
        var vm = this;
        vm.contentId = $stateParams.contentId;
        vm.data = {};
        vm.rows = [];

        $http.get(ServerURL + 'TVcontent&content=' + vm.contentId).then(function (response) {
            vm.data = response.data;

            for (var d in vm.data.items) {
                if (d % 2 == 0) continue;
                vm.rows[vm.rows.length] = [vm.data.items[d - 1], vm.data.items[d]];
            }
        });
    }
})();


