(function () {
    'use strict';

    angular
        .module('app.dashboard')
        .controller('DashboardController', DashboardController);

    DashboardController.$inject = ['$q', 'dataservice', 'logger'];
    /* @ngInject */
    function DashboardController($q, dataservice, logger) {
        var vm = this;

        vm.allBills = [];
        vm.title = 'Dashboard';

        activate();

        function activate() {
            var promises = [getBills()];
            return $q.all(promises).then(function() {
                logger.info('Activated Dashboard View');
            });
        }

        function getBills() {
            return dataservice.getBills().then(function (data) {
                vm.allBills = data;
                console.log(vm.allBills);
                return vm.allBills;
            });
        }
    }
})();
