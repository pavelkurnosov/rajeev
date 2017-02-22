(function () {
    'use strict';

    angular
        .module('app')
        .controller('MainController', MainController);

    /** @ngInject */
    function MainController($state, $rootScope, $http, ServerURL) {
        var vm = this;
        vm.cateActived = 0;
        vm.accountName = ["حسابي", "My account"];
        vm.redrawTab = false;

        vm.menus = [
            {label: ["الرئيسية", "HOME"], icon: "home.png", tabInd: ""},
            {label: ["مميزة", "FEATURED"], icon: "featured.png", tabInd: ""},
            {label: ["تليفزيون ", "TV CHANNELS"], icon: "tv_channels.png", tabInd: "0"},
            {label: ["فيديوهات", "VIDEOS"], icon: "videos.png", tabInd: "1"},
            {label: ["ألعاب", "GAMES"], icon: "games.png", tabInd: "2"},
            {label: ["مفضلات", "FAVOURITES"], icon: "favourites.png", tabInd: ""},
            {label: ["مساعدة", "HELP"], icon: "help.png", tabInd: ""},
            {label: ["تعليق", "FEEDBACK"], icon: "feedback.png", tabInd: ""}
        ];

        vm.tabs = [
            {label: ["ألعاب", "GAMES"], url: '#game-home', categories: []},
            {label: ["فيديوهات", "VIDEOS"], url: '#video-home', categories: []},
            {label: ["تليفزيون ", "TV CHANNELS"], url: '#tv-home', categories: []}
        ];

        $http.get(ServerURL + 'AllCategories').then(function (response) {
            for (var t in vm.tabs) {
                vm.tabs[t]['categories'] = response.data[t];
            }
            vm.redrawTab = true;
        });

        vm.tabSelect = function (tabInd, tab) {
            if (tabInd == 0 || tabInd != "") {
                var urls = ['tv-home', 'video-home', 'game-home'];
                $state.go(urls[tabInd]);
                vm.cateActived = -1;
                vm.selectTab = tab;

                $('.nav-tabs .nav-item').removeClass('active');
                $('.nav-tabs .nav-item').eq(tabInd).addClass('active');
            }
        };

        vm.changeLanguage = function () {
            $rootScope.lang = $rootScope.lang == 0 ? 1 : 0;
            vm.tabs.reverse();
        };
    }
})();


