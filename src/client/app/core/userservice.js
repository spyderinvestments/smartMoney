(function () {
    'use strict';

    angular
        .module('app.core')
        .factory('userservice', userservice);

    userservice.$inject = ['$http', '$q', 'exception', 'logger'];
    /* @ngInject */
    function userservice($http, $q, exception, logger) {
        var service = {
            register: register
            login: login
        };

        return service;

        function register(user) {
            return $http({
                method: 'POST',
                url: '/users/register',
                headers: {
                    authorization: `Bearer ${localStorage.getItem("token")}`
                },
                data: {
                    name: user.name,
                    email: user.email,
                    password: user.password,
                }
            });

        }

        function login(email, password) {
            return $http({
                method: 'POST',
                url: '/users/login',
                headers: {
                    authorization: `Bearer ${localStorage.getItem("token")}`
                },
                data: {
                    email: email,
                    password: password,
                }
            });
        }
    }
})();
