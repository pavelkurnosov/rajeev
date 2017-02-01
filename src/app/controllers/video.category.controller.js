(function() {
  'use strict';

  angular
    .module('app')
    .controller('VideoCategoryController', VideoCategoryController);

  /** @ngInject */
  function VideoCategoryController($stateParams) {
    var vm = this;
    var category = $stateParams.categoryId;
    vm.data = {
      categoryTitles: ["", "LIFESTYLE", "KIDS", "COOKING", "ENTERTAINMENT"],
      featuredVideoTitle : "Poultry recipe Barbecue Chicken",
      category: category,
      items: [{
        id: 1,
        thumb: "video_thumb" + (category * 2 - 1) + ".jpg",
        title: "Yoga"
      }, {
        id: 2,
        thumb: "video_thumb" + (category * 2) + ".jpg",
        title: "Meditation"
      }, {
        id: 3,
        thumb: "video_thumb" + (category * 2 - 1) + ".jpg",
        title: "Yoga"
      }, {
        id: 4,
        thumb: "video_thumb" + (category * 2) + ".jpg",
        title: "Meditation"
      }, {
        id: 5,
        thumb: "video_thumb" + (category * 2 - 1) + ".jpg",
        title: "Yoga"
      }, {
        id: 6,
        thumb: "video_thumb" + (category * 2) + ".jpg",
        title: "Meditation"
      }]
    };
  }
})();


