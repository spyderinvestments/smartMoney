(function () {
    'use strict';

    angular
        .module('app.dashboard')
        .controller('DashboardController', DashboardController);

    DashboardController.$inject = ['$q', '$uibModal', '$log', 'dataservice', 'logger'];
    /* @ngInject */
    function DashboardController($q, $uibModal, $log, dataservice, logger) {
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
                return vm.allBills;
            });
        }

        vm.open = function (size) {

            function addBillCtrl($scope, $uibModalInstance) {
              vm.ok = function () {
                //TODO: post new bill
                // $uibModalInstance.close(vm.selected.item);
              };

              vm.cancel = function () {
                $uibModalInstance.dismiss('cancel');
              };
            }

            var modalInstance = $uibModal.open({
              animation: true,
              controller: addBillCtrl,
              templateUrl: 'myModalContent.html'
            });

            modalInstance.result.then(function (selectedItem) {
              vm.selected = selectedItem;
            }, function () {
              $log.info('Modal dismissed at: ' + new Date());
            });
          };




    }
})();
