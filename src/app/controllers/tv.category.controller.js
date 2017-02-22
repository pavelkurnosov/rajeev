(function () {
    'use strict';

    angular
        .module('app')
        .controller('TvCategoryController', TvCategoryController);

    /** @ngInject */
    function TvCategoryController($stateParams, $http, ServerURL) {
        var vm = this;
        vm.categoryId = $stateParams.categoryId;
        vm.data = {};
        vm.rows = [];

        $http.get(ServerURL + 'TVcategory&cat=' + vm.categoryId).then(function (response) {
            vm.data = response.data;

            for (var d in vm.data.items) {
                if (d % 2 == 0) continue;
                vm.rows[vm.rows.length] = [vm.data.items[d - 1], vm.data.items[d]];
            }
        });
    }
})();


