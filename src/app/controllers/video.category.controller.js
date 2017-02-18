(function () {
    'use strict';

    angular
        .module('app')
        .controller('VideoCategoryController', VideoCategoryController);

    /** @ngInject */
    function VideoCategoryController($stateParams, $http, ServerURL) {
        var vm = this;
        vm.category = $stateParams.categoryId;
        vm.data = {};
        vm.rows = [];

        $http.get(ServerURL + 'videoCategory&cat=' + vm.category).then(function (response) {
            vm.data = response.data;

            for (var d in vm.data.items) {
                if (d % 2 == 0) continue;
                vm.rows[vm.rows.length] = [vm.data.items[d - 1], vm.data.items[d]];
            }
        });
    }
})();


