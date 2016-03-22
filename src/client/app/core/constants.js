/* global toastr:false,  :false */
(function () {
    'use strict';

    angular
        .module('app.core')
        .constant('toastr', toastr)
        .constant('moment', moment)
        .constant('CONST', CONST);

    var CONST = {
        API_URL: 'http://localhost:3000',
    }
})();
