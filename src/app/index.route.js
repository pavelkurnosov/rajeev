(function () {
    'use strict';

    angular
        .module('app')
        .config(routerConfig);

    /** @ngInject */
    function routerConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('tv-home', {
                url: '/tv-home',
                templateUrl: 'app/views/tv-home.html',
                controller: 'TvHomeController',
                controllerAs: 'vm'
            })
            .state('tv-category', {
                url: '/tv-category/:categoryId',
                templateUrl: 'app/views/tv-category.html',
                controller: 'TvCategoryController',
                controllerAs: 'vm'
            })
            .state('tv-content', {
                url: '/tv-content/:contentId',
                templateUrl: 'app/views/tv-content.html',
                controller: 'TvContentController',
                controllerAs: 'vm'
            })

            .state('video-home', {
                url: '/video-home',
                templateUrl: 'app/views/video-home.html',
                controller: 'VideoHomeController',
                controllerAs: 'vm'
            })
            .state('video-category', {
                url: '/video-category/:categoryId',
                templateUrl: 'app/views/video-category.html',
                controller: 'VideoCategoryController',
                controllerAs: 'vm'
            })
            .state('video-content', {
                url: '/video-content/:contentId',
                templateUrl: 'app/views/video-content.html',
                controller: 'VideoContentController',
                controllerAs: 'vm'
            })

            .state('game-home', {
                url: '/game-home',
                templateUrl: 'app/views/game-home.html',
                controller: 'GameHomeController',
                controllerAs: 'vm'
            })
            .state('game-category', {
                url: '/game-category/:categoryId',
                templateUrl: 'app/views/game-category.html',
                controller: 'GameCategoryController',
                controllerAs: 'vm'
            })
            .state('game-content', {
                url: '/game-content/:contentId',
                templateUrl: 'app/views/game-content.html',
                controller: 'GameContentController',
                controllerAs: 'vm'
            });

        $urlRouterProvider.otherwise('/tv-home');
    }

})();
