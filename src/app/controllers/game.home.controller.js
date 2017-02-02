(function () {
    'use strict';

    angular
        .module('app')
        .controller('GameHomeController', GameHomeController);

    /** @ngInject */
    function GameHomeController() {
        var vm = this;
        vm.viewAllText = ["رؤية الجميع", "View All"];
        vm.data = {
            featuredVideoId: "j5aIqSSVrdc",
            featuredVideoTitle: "Fitness Workouts for women",
            categories: [{
                id: 1,
                title: ["ألعاب جديدة", "NEW GAMES"],
                color: "color5",
                items: [{
                    id: 1,
                    thumb: "thumb1.jpg",
                    title: "Yoga"
                }, {
                    id: 2,
                    thumb: "thumb2.jpg",
                    title: "Meditation"
                },{
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
                title: ["ألعاب مشهورة", "POPULAR GAMES"],
                color: "color3",
                items: [{
                    id: 3,
                    thumb: "thumb3.jpg",
                    title: "Chicago style Hot dog"
                }, {
                    id: 4,
                    thumb: "thumb4.jpg",
                    title: "Asian Shrimp soup"
                },{
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
                title: ["ألعاب حسب الفئة", "GAMES BY CATEGORY"],
                color: "color2",
                items: [{
                    id: 5,
                    thumb: "thumb5.jpg",
                    title: "Chicago style Hot dog"
                }, {
                    id: 6,
                    thumb: "thumb6.jpg",
                    title: "Asian Shrimp soup"
                },{
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


