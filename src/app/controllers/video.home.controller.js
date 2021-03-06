(function () {
    'use strict';

    angular
        .module('app')
        .controller('VideoHomeController', VideoHomeController);

    /** @ngInject */
    function VideoHomeController($http, ServerURL, $rootScope) {
        var vm = this;
        vm.viewAllText = ["رؤية الجميع", "View All"];
        vm.data = {};

        $http.get(ServerURL + 'defaultvideos').then(function (response) {
            vm.data = response.data;

            $rootScope.categories = [];
            for (var c in vm.data.categories) {
                $rootScope.categories[$rootScope.categories.length] = {
                    title: vm.data.categories[c]['title'],
                    url: '#video-category/' + vm.data.categories[c]['id'],
                    color: vm.data.categories[c]['color']
                };
            }
        });
    }
})();


