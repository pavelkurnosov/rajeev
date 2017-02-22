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

        $http.get(ServerURL + 'videoCategory&cat=' + vm.category).then(function (response) {
            vm.data = response.data;
        });
    }
})();


