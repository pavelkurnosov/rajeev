(function () {
    'use strict';

    angular
        .module('app')
        .controller('VideoHomeController', VideoHomeController);

    /** @ngInject */
    function VideoHomeController($http, ServerURL) {
        var vm = this;
        vm.viewAllText = ["رؤية الجميع", "View All"];
        vm.data = {};

        $http.get(ServerURL + 'defaultvideos').then(function (response) {
            vm.data = response.data;
        });
    }
})();


