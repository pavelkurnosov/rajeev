(function () {
    'use strict';

    angular
        .module('app')
        .controller('VideoContentController', VideoContentController);

    /** @ngInject */
    function VideoContentController($stateParams, $http, ServerURL) {
        var vm = this;
        vm.content = $stateParams.contentId;
        vm.data = {};
        vm.rows = [];

        $http.get(ServerURL + 'videoContent&content=' + vm.content).then(function (response) {
            vm.data = response.data;

            for (var d in vm.data.items) {
                if (d % 2 == 0) continue;
                vm.rows[vm.rows.length] = [vm.data.items[d - 1], vm.data.items[d]];
            }
        });
    }
})();


