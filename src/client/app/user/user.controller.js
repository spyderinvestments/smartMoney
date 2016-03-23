// 'use strict';
//
// //index, navbar controller
// app.controller('loginCtrl', function ($scope, $state, $rootScope, userservice) {
//   if (localStorage.getItem("token")) {
//     $state.go('dashboard');
//   }
//
//   $rootScope.loggedIn = !localStorage.getItem("token");
//
//   $scope.register = function (user) {
//     userService.register(user)
//       .then(function (resp) {
//         localStorage.setItem("token", resp.data);
//         $rootScope.loggedIn = !localStorage.getItem("token");
//         $scope.go('dashboard');
//       }, function (err) {
//         console.error(err.data);
//         $scope.error = err.data;
//       });
//   }
//
//   $scope.login = function () {
//     userService.login($scope.loginEmail, $scope.loginPassword)
//       .then(function (resp) {
//         localStorage.setItem("token", resp.data);
//         $rootScope.loggedIn = !localStorage.getItem("token");
//         $state.go('dashboard');
//       }, function (err) {
//         $scope.error = err.data;
//       });
//   }
//
//   $scope.logout = function () {
//     localStorage.removeItem("token");
//     $rootScope.loggedIn = !localStorage.getItem("token");
//     $state.go('home');
//   }
//
// });

(function () {
    'use strict';

    angular
        .module('app.user')
        .controller('UserController', UserController);

    UserController.$inject = ['$q', '$rootScope', 'userservice', 'logger'];
    /* @ngInject */
    function UserController($q, $rootScope, userservice, logger) {
        var vm = this;
        logger.info('inside user controller')
        vm.register = function (user) {
            logger.info('register clicked', user);
            userservice.register(user)
                .then(function (resp) {
                    console.log(resp);
                    localStorage.setItem("token", resp.data);
                    $rootScope.loggedIn = !localStorage.getItem("token");
                    vm.go('dashboard');
                }, function (err) {
                    console.error(err.data);
                    vm.error = err.data;
                });
        }

        vm.login = function () {
            logger.info('login')
            userservice.login(vm.loginEmail, vm.loginPassword)
                .then(function (resp) {
                    localStorage.setItem("token", resp.data);
                    $rootScope.loggedIn = !localStorage.getItem("token");
                    $state.go('dashboard');
                }, function (err) {
                    vm.error = err.data;
                });
        }

        vm.logout = function () {
            logger.info('logout')
            localStorage.removeItem("token");
            $rootScope.loggedIn = !localStorage.getItem("token");
            $state.go('home');
        }


    }
})();
