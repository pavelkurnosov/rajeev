(function () {
    'use strict';

    angular
        .module('app')
        .controller('TvHomeController', TvHomeController);

    /** @ngInject */
    function TvHomeController($http, ServerURL, $rootScope) {
        var vm = this;
        vm.viewAllText = ["رؤية الجميع", "View All"];
        $http.get(ServerURL + 'defaultTV').then(function (response) {
            vm.data = response.data;

            $rootScope.categories = [];
            for (var c in vm.data.categories) {
                $rootScope.categories[$rootScope.categories.length] = {
                    title: vm.data.categories[c]['title'],
                    url: '#tv-category/' + vm.data.categories[c]['id'],
                    color: vm.data.categories[c]['color']
                };
            }
        });
    }
})();


