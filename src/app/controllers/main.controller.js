(function () {
    'use strict';

    angular
        .module('app')
        .controller('MainController', MainController);

    /** @ngInject */
    function MainController($state) {
        var vm = this;
        vm.tabSelect  = function (tabInd) {
            var urls = ['tv-home', 'video-home', 'game-home'];
            $state.go(urls[tabInd]);

            $('.nav-tabs .nav-item').removeClass('active');
            $('.nav-tabs .nav-item').eq(tabInd).addClass('active');
        };
    }
})();


