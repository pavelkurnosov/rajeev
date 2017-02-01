(function () {
    'use strict';

    angular
        .module('app')
        .controller('TvHomeController', TvHomeController);

    /** @ngInject */
    function TvHomeController() {
        var vm = this;
        vm.data = {
            featuredVideoId: "j5aIqSSVrdc",
            featuredVideoTitle: "Fitness Workouts for women",
            categories: [{
                id: 1,
                title: "FITNESS TV",
                color: "p",
                items: [{
                    id: 1,
                    thumb: "thumb1.jpg",
                    title: "Yoga"
                }, {
                    id: 2,
                    thumb: "thumb2.jpg",
                    title: "Meditation"
                }]
            }, {
                id: 2,
                title: "COOKING TV",
                color: "p",
                items: [{
                    id: 3,
                    thumb: "thumb3.jpg",
                    title: "Chicago style Hot dog"
                }, {
                    id: 4,
                    thumb: "thumb4.jpg",
                    title: "Asian Shrimp soup"
                }]
            }, {
                id: 3,
                title: "GOSSIP TV",
                color: "p",
                items: [{
                    id: 5,
                    thumb: "thumb5.jpg",
                    title: "Chicago style Hot dog"
                }, {
                    id: 6,
                    thumb: "thumb6.jpg",
                    title: "Asian Shrimp soup"
                }]
            }]
        };
    }
})();


