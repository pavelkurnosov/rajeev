(function () {
    'use strict';

    angular
        .module('app')
        .controller('GameCategoryController', GameCategoryController);

    /** @ngInject */
    function GameCategoryController($stateParams, $http, ServerURL) {
        var vm = this;
        vm.categoryId = $stateParams.categoryId;
        vm.data = {};
        vm.rows = [];

        $http.get(ServerURL + 'gamesCategory&cat=' + vm.categoryId).then(function (response) {
            vm.data = response.data;

            for (var d in vm.data.items) {
                if (d % 2 == 0) continue;
                vm.rows[vm.rows.length] = [vm.data.items[d - 1], vm.data.items[d]];
            }
        });
    }
})();


