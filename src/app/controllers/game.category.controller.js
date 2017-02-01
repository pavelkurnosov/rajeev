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
            categoryTitles: ["", "FITNESS TV", "COOKING TV", "GOSSIP TV", "TRAVAL TV"],
            featuredVideoTitle : "Poultry recipe Barbecue Chicken",
            category: category,
            items: [{
                id: 1,
                thumb: "thumb" + (category * 2 - 1) + ".jpg",
                title: "Yoga"
            }, {
                id: 2,
                thumb: "thumb" + (category * 2) + ".jpg",
                title: "Meditation"
            }, {
                id: 3,
                thumb: "thumb" + (category * 2 - 1) + ".jpg",
                title: "Yoga"
            }, {
                id: 4,
                thumb: "thumb" + (category * 2) + ".jpg",
                title: "Meditation"
            }, {
                id: 5,
                thumb: "thumb" + (category * 2 - 1) + ".jpg",
                title: "Yoga"
            }, {
                id: 6,
                thumb: "thumb" + (category * 2) + ".jpg",
                title: "Meditation"
            }]
        };
    }
})();


