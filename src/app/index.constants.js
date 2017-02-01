/* global malarkey:false, moment:false */
(function () {
    'use strict';

    angular
        .module('flysat')
        .constant('malarkey', malarkey)
        .constant('moment', moment)
        // .constant('ServerURL', 'http://flysat.greatsuccess.tech/server/controller.php?flag=');
        // .constant('ServerURL', 'http://localhost/fredy_fabrielo/server/controller.php?flag=');
        .constant('ServerURL', 'http://flysat.cf/server/controller.php?flag=');

})();
