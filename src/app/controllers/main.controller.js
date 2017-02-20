(function () {
    'use strict';

    angular
        .module('app')
        .controller('MainController', MainController);

    /** @ngInject */
    function MainController($state, $rootScope) {
        var vm = this;
        vm.cateActived = 0;
        vm.accountName = ["حسابي", "My account"];

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

        vm.tabs = [{
            label: ["ألعاب", "GAMES"],
            url: '#game-home',
            categories: [
                {title: ["ألغاز", "Puzzle"], url: "#game-category/1", color: "color5"},
                {title: ["أركايد", "Arcade"], url: "#game-category/2", color: "color2"},
                {title: ["حركة", "Action"], url: "#game-category/3", color: "color3"},
                {title: ["سباق", "Racing"], url: "#game-category/4", color: "color4"},
                {title: ["أركايد", "Arcade"], url: "#game-category/2", color: "color2"},
                {title: ["حركة", "Action"], url: "#game-category/3", color: "color3"},
                {title: ["سباق", "Racing"], url: "#game-category/4", color: "color4"}
            ]
        }, {
            label: ["فيديوهات", "VIDEOS"],
            url: '#video-home',
            categories: [
                {title: ["أنماط الحياة", "Lifestyle"], url: "#video-category/1", color: "color5"},
                {title: ["أطفال", "Kids"], url: "#video-category/2", color: "color2"},
                {title: ["طبخ", "Cooking"], url: "#video-category/3", color: "color3"},
                {title: ["تسلية", "Entertainment"], url: "#video-category/4", color: "color4"},
                {title: ["طبخ", "Cooking"], url: "#video-category/3", color: "color3"},
                {title: ["تسلية", "Entertainment"], url: "#video-category/4", color: "color4"}
            ]
        }, {
            label: ["تليفزيون ", "TV CHANNELS"],
            url: '#tv-home',
            categories: [
                {title: ["تليفزيون اللياقة", "Fitness TV"], url: "#tv-category/1", color: "color1"},
                {title: ["تليفزيون الثرثرة", "Gossip TV"], url: "#tv-category/2", color: "color2"},
                {title: ["تليفزيون الطبخ", "Cooking TV"], url: "#tv-category/3", color: "color3"},
                {title: ["تليفزيون السفر", "Travel TV"], url: "#tv-category/4", color: "color4"},
                {title: ["تليفزيون الثرثرة", "Gossip TV"], url: "#tv-category/2", color: "color2"},
                {title: ["تليفزيون الطبخ", "Cooking TV"], url: "#tv-category/3", color: "color3"},
                {title: ["تليفزيون السفر", "Travel TV"], url: "#tv-category/4", color: "color4"}
            ]
        }];

        $rootScope.categories = [
            {title: ["تليفزيون اللياقة", "Fitness TV"], url: "#tv-category/1", color: "color1"},
            {title: ["تليفزيون الثرثرة", "Gossip TV"], url: "#tv-category/2", color: "color2"},
            {title: ["تليفزيون الطبخ", "Cooking TV"], url: "#tv-category/3", color: "color3"},
            {title: ["تليفزيون السفر", "Travel TV"], url: "#tv-category/4", color: "color4"},
            {title: ["تليفزيون الثرثرة", "Gossip TV"], url: "#tv-category/2", color: "color2"},
            {title: ["تليفزيون الطبخ", "Cooking TV"], url: "#tv-category/3", color: "color3"},
            {title: ["تليفزيون السفر", "Travel TV"], url: "#tv-category/4", color: "color4"}
        ];

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


