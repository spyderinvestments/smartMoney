(function () {
    'use strict';
    /* jshint ignore:start */
    angular
        .module('app.core')
        .factory('userservice', userservice);

    // localStorage
    userservice.$inject = ['$http', '$state', '$rootScope', '$window', '$location', '$q', 'exception', 'logger'];
    /* @ngInject */
    function userservice($http, $state, $rootScope, $window, $location, $q, exception, logger) {
        var service = {
            forceSSL: forceSSL,
            register: register,
            login: login,
            logout: logout,
            listen: listen,
            init: init
        };

        return service;

        function forceSSL() {
            if ($location.protocol() !== 'https') {
                $window.location.href = $location.absUrl().replace('http', 'https');
            }
        }

        function logout() {
            let token = localStorage.get('token');
            if (token) {
                localStorage.remove('token');
                this.token = null;
                emit('tokenChange');
            }
            $state.go('main', {
                login: true
            });
        }

        function login(loginInfo) {
            return $http.post(`/users/login`, loginInfo)
                .success(resp => {
                    updateToken(resp);
                });
        }

        function register(registerInfo) {
            return $http.post(`/users/register`, registerInfo)
                .success(resp => {
                    updateToken(resp);
                });
        }

        function guest() {
            return $http.post(`http://localhost:3000/users/guest`)
                .success(resp => {
                    updateToken(resp);
                });
        }

        function listen(name, scope, callback) {
            let handler = $rootScope.$on(name, callback);
            scope.$on('$destroy', handler);
        }

        function init(cb) {
            this.token = localStorage.get('token') || null;
            if (!this.token) {
                $state.go('main', {
                    login: true
                });
                // TODO: check this function
                return;
            }
            try {
                var payload = JSON.parse(atob(this.token.split('.')[1]));
            } catch (e) {
                $state.go('main', {
                    login: true
                });
                return localStorage.remove('token');
            }
            if (payload.exp < Date.now() / 1000) {
                $state.go('main', {
                    login: true
                });
                return localStorage.remove('token');
            }
            $http.defaults.headers.common.Authorization = this.token;
            window.location.hash = window.location.hash.replace(/\?.*/, '');
            cb(payload.id);
        }


        function emit(name) {
            $rootScope.$emit(name);
        }

        function updateToken(token) {
            this.token = 'Bearer ' + token;
            localStorage.set('token', 'Bearer ' + token);
            $http.defaults.headers.common.Authorization = token;
            emit('tokenChange');
        }

    }

    /* jshint ignore:end */
})();
