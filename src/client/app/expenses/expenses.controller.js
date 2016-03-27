(function () {
    'use strict';

    angular
        .module('app.expenses')
        .controller('ExpensesController', ExpensesController);

    ExpensesController.$inject = ['$q', '$uibModal', 'dataservice', 'logger'];
    /* @ngInject */
    function ExpensesController($q, $uibModal, dataservice, logger) {
        var vm = this;

        vm.allBills = [];
        vm.title = 'Expenses';

        activate();

        function activate() {
            var promises = [getBills()];
            return $q.all(promises).then(function() {
                logger.info('Activated Expenses View');
            });
        }

        function getBills() {
            return dataservice.getBills().then(function (data) {
                vm.allBills = data;
                return vm.allBills;
            });
        }



    }
})();
