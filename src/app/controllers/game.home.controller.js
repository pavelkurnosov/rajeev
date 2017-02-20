(function () {
    'use strict';

    angular
        .module('app')
        .controller('GameHomeController', GameHomeController);

    /** @ngInject */
    function GameHomeController($http, ServerURL) {
        var vm = this;
        vm.viewAllText = ["رؤية الجميع", "View All"];
        $http.get(ServerURL + 'defaultGames').then(function (response) {
            vm.data = response.data;
        });
    }
})();


