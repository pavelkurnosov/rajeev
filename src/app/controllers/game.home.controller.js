(function () {
    'use strict';

    angular
        .module('app')
        .controller('GameHomeController', GameHomeController);

    /** @ngInject */
    function GameHomeController($http, ServerURL, $rootScope) {
        var vm = this;
        vm.viewAllText = ["رؤية الجميع", "View All"];
        $http.get(ServerURL + 'defaultGames').then(function (response) {
            vm.data = response.data;

            $rootScope.categories = [];
            for (var c in vm.data.categories) {
                $rootScope.categories[$rootScope.categories.length] = {
                    title: vm.data.categories[c]['title'],
                    url: '#game-category/' + vm.data.categories[c]['id'],
                    color: vm.data.categories[c]['color']
                };
            }
        });

        vm.setCateActived = function (cateId) {
            var parentScope = angular.element(document.getElementById('main')).scope();
            parentScope.vm.cateActived = cateId - 1;
        };
    }
})();
jjjmm

