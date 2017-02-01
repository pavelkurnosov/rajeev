(function () {
    'use strict';

    angular.module('app')
        .run(runBlock);

    /** @ngInject */
    function runBlock($rootScope) {

        var tabs = [{
            label: "TV CHANNELS",
            url: '#tv-home',
            categories: [{
                title: "Fitness TV",
                url: "#tv-category/1",
                color: "color1"
            }, {
                title: "Cooking TV",
                url: "#tv-category/2",
                color: "color2"
            }, {
                title: "Gossip TV",
                url: "#tv-category/3",
                color: "color3"
            }, {
                title: "Travel TV",
                url: "#tv-category/4",
                color: "color4"
            }]
        }, {
            label: "VIDEOS",
            url: '#video-home',
            categories: [{
                title: "Lifestyle",
                url: "#video-category/1",
                color: "color1"
            }, {
                title: "Kids",
                url: "#video-category/2",
                color: "color2"
            }, {
                title: "Cooking",
                url: "#video-category/3",
                color: "color3"
            }, {
                title: "Entertainment",
                url: "#video-category/4",
                color: "color4"
            }]
        }, {
            label: "GAMES",
            url: '#game-home',
            categories: [{
                title: "Puzzle",
                url: "#game-category/1",
                color: "color5"
            }, {
                title: "Arcade",
                url: "#game-category/2",
                color: "color2"
            }, {
                title: "Action",
                url: "#game-category/3",
                color: "color3"
            }, {
                title: "Racing",
                url: "#game-category/4",
                color: "color4"
            }]
        }];

        $rootScope.mainTabs = tabs;


        angular.element(document).ready(function () {
            var sideslider = $('[data-toggle=collapse-side]');
            var sel = sideslider.attr('data-target');
            var sel2 = sideslider.attr('data-target-2');
            sideslider.click(function (event) {
                $(sel).toggleClass('in');
                $(sel2).toggleClass('out');
            });
        });
    }

})();
