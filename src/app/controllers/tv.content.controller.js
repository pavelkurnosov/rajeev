(function () {
    'use strict';

    angular
        .module('app')
        .controller('TvContentController', TvContentController);

    /** @ngInject */
    function TvContentController($stateParams) {
        var vm = this;
        var content = $stateParams.contentId;
        vm.data = {
            categoryTitles: ["", "FITNESS TV", "COOKING TV", "GOSSIP TV", "TRAVAL TV"],
            featuredVideoTitle : "Chicago style Hotdog",

            items: [{
                thumb: "thumb" + (content * 2 - 1) + ".jpg",
                title: "Yoga"
            }, {
                thumb: "thumb" + (content * 2) + ".jpg",
                title: "Meditation"
            }, {
                thumb: "thumb" + (content * 2 - 1) + ".jpg",
                title: "Yoga"
            }, {
                thumb: "thumb" + (content * 2) + ".jpg",
                title: "Meditation"
            }, {
                thumb: "thumb" + (content * 2 - 1) + ".jpg",
                title: "Yoga"
            }, {
                thumb: "thumb" + (content * 2) + ".jpg",
                title: "Meditation"
            }]
        };
    }
})();


