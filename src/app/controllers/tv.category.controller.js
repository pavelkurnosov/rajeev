(function () {
    'use strict';

    angular
        .module('app')
        .controller('TvCategoryController', TvCategoryController);

    /** @ngInject */
    function TvCategoryController($stateParams) {
        var vm = this;
        var category = $stateParams.categoryId;
        var videoURL = "";
        if (category == 1) {    // fitness
            videoURL = "j5aIqSSVrdc";
        } else if (category == 2) { // cooking
            videoURL = "8tVhsICxwwQ";
        } else if (category == 3) { // gossip
            videoURL = "AeA0ZKzAeH4";
        } else if (category == 4) { // traval
            videoURL = "mJgsD6E4Jrs";
        }
        vm.data = {
            categoryTitles: ["", "FITNESS TV", "COOKING TV", "GOSSIP TV", "TRAVAL TV"],
            featuredVideoTitle : "Poultry recipe Barbecue Chicken",
            featuredVideoURL : videoURL,
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


