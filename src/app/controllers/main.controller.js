(function () {
    'use strict';

    angular
        .module('app')
        .controller('MainController', MainController);

    /** @ngInject */
    function MainController($state) {
        var vm = this;
        vm.tabSelect  = function (tabInd) {
            if (tabInd == 0) {
                $state.go('tv-home');
            } else if (tabInd == 1) {
                $state.go('video-home');
            } else {
                $state.go('game-home');
            }
        }
    }
})();


