(function () {
    'use strict';

    angular
        .module('app')
        .controller('GameCategoryController', GameCategoryController);

    /** @ngInject */
    function GameCategoryController($stateParams) {
        var vm = this;
        var category = $stateParams.categoryId;
        vm.data = {
            categoryTitles: ["", "PUZZLE", "ARCADE", "ACTION", "RACING"],
            featuredVideoTitle : "Poultry recipe Barbecue Chicken",
            category: category,
            items: [{
                id: 1,
                thumb: "game_thumb" + (category * 2 - 1) + ".jpg",
                title: "Yoga"
            }, {
                id: 2,
                thumb: "game_thumb" + (category * 2) + ".jpg",
                title: "Meditation"
            }, {
                id: 3,
                thumb: "game_thumb" + (category * 2 - 1) + ".jpg",
                title: "Yoga"
            }, {
                id: 4,
                thumb: "game_thumb" + (category * 2) + ".jpg",
                title: "Meditation"
            }, {
                id: 5,
                thumb: "game_thumb" + (category * 2 - 1) + ".jpg",
                title: "Yoga"
            }, {
                id: 6,
                thumb: "game_thumb" + (category * 2) + ".jpg",
                title: "Meditation"
            }]
        };
    }
})();


