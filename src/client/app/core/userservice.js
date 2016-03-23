(function () {
    'use strict';

    angular
        .module('app.core')
        .factory('userservice', userservice);

// localStorageService
    userservice.$inject = ['$http', '$state', '$rootScope', '$window', '$location', '$q', 'exception', 'logger', 'CONST'];
    /* @ngInject */
    function userservice($http, $state, $rootScope, $window, $location, $q, exception, logger, CONST) {
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
          };

          function logout() {
            let token = localStorageService.get('token');
            if (token) {
              localStorageService.remove('token');
              this.token = null;
              emit('tokenChange');
            }
            $state.go('main', {login: true});
          }

          function login(loginInfo) {
            return $http.post(`${CONST.API_URL}/users/login`, loginInfo)
             .success( resp => {
               updateToken(resp);
             })
          }

          function register (registerInfo) {
            return $http.post(`${CONST.API_URL}/users/register`, registerInfo)
             .success( resp => {
               updateToken(resp);
             })
          }

          function guest() {
            return $http.post(`${CONST.API_URL}/users/guest`)
             .success( resp => {
               updateToken(resp);
             })
          }

          function listen(name, scope, callback) {
            let handler = $rootScope.$on(name, callback);
            scope.$on('$destroy', handler);
          }

          function init(cb) {
            this.token = localStorageService.get('token') || null;
            if (!this.token) {
              $state.go('main', {login: true});
              return
            }
            try {
              var payload = JSON.parse(atob(this.token.split('.')[1]));
            }
            catch (e) {
              $state.go('main', {login: true})
              return localStorageService.remove('token')
            }
            if (payload.exp < Date.now()/1000) {
              $state.go('main', {login: true})
              return localStorageService.remove('token')
            }
            $http.defaults.headers.common.Authorization = this.token;
            window.location.hash = window.location.hash.replace(/\?.*/,'');
            cb(payload.id)
          }


          function emit(name) {
            $rootScope.$emit(name);
          }

          function updateToken(token) {
            this.token = 'Bearer ' + token;
            localStorageService.set('token', 'Bearer ' + token);
            $http.defaults.headers.common.Authorization = token;
            emit('tokenChange');
          }

    }
})();
