(function () {
    'use strict';

    angular
        .module('app')
        .controller('TvCategoryController', TvCategoryController);

    /** @ngInject */
    function TvCategoryController($stateParams) {
        var vm = this;
        var category = $stateParams.category;
        vm.data = {
            categoryTitles: ["", "FITNESS TV", "COOKING TV", "GOSSIP TV", "TRAVAL TV"],
            featuredVideoTitle : "Poultry recipe Barbecue Chicken",
            category: category,
            items: [{
                thumb: "thumb" + (category * 2 - 1) + ".jpg",
                title: "Yoga"
            }, {
                thumb: "thumb" + (category * 2) + ".jpg",
                title: "Meditation"
            }, {
                thumb: "thumb" + (category * 2 - 1) + ".jpg",
                title: "Yoga"
            }, {
                thumb: "thumb" + (category * 2) + ".jpg",
                title: "Meditation"
            }, {
                thumb: "thumb" + (category * 2 - 1) + ".jpg",
                title: "Yoga"
            }, {
                thumb: "thumb" + (category * 2) + ".jpg",
                title: "Meditation"
            }]
        };
    }
})();


