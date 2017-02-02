(function () {
    'use strict';

    angular.module('app')
        .run(runBlock);

    /** @ngInject */
    function runBlock($rootScope, $window) {


        $rootScope.lang = 0;

        $rootScope.$on('$viewContentLoaded', function() {
            $window.scrollTo(0, 0);
        });

    }

})();
