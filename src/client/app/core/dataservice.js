(function () {
    'use strict';

    angular
        .module('app.core')
        .factory('dataservice', dataservice);

    dataservice.$inject = ['$http', '$q', 'exception', 'logger'];
    /* @ngInject */
    function dataservice($http, $q, exception, logger) {
        var service = {
            getBills: getBills
            // getMessageCount: getMessageCount
        };

        return service;

        function getMessageCount() { return $q.when(72); }

        function getBills() {
          return $http.get('/api/bills')
            .then(success)
            .catch(fail);

            function success(response) {
              return response.data;
            }

            function fail(e) {
              return exception.catcher('Get failed for getBills')(e);
            }
        }

        // function getPeople() {
        //     return $http.get('/api/people')
        //         .then(success)
        //         .catch(fail);
        //
        //     function success(response) {
        //         return response.data;
        //     }
        //
        //     function fail(e) {
        //         return exception.catcher('XHR Failed for getPeople')(e);
        //     }
        // }
    }
})();
