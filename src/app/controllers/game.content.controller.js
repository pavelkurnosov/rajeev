(function () {
    'use strict';

    angular
        .module('app')
        .controller('GameContentController', GameContentController);

    /** @ngInject */
    function GameContentController($stateParams, $http, ServerURL) {
        var vm = this;
        vm.contentId = $stateParams.contentId;
        vm.data = {};
        vm.rows = [];

        $http.get(ServerURL + 'gamesContent&content=' + vm.contentId).then(function (response) {
            vm.data = response.data;

            for (var d in vm.data.items) {
                if (d % 2 == 0) continue;
                vm.rows[vm.rows.length] = [vm.data.items[d - 1], vm.data.items[d]];
            }
        });
    }
})();


