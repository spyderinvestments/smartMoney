(function () {
    'use strict';

    angular
        .module('app.dashboard')
        .controller('DashboardController', DashboardController);

    DashboardController.$inject = ['$q', '$uibModal', '$uibModalInstance', 'dataservice', 'logger'];
    /* @ngInject */
    function DashboardController($q, $uibModal, $uibModalInstance, dataservice, logger) {
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

        vm.addBill = function () {
          logger.info('Add clicked')
          //TODO: post new bill
          // $uibModalInstance.close(vm.selected.item);
        };

        vm.cancel = function () {
          logger.info('Cancel clicked')
          $uibModalInstance.dismiss('cancel');
        };

        vm.open = function (size) {
          // AddBillController.$inject = ['$uibModalInstance'];
            // function AddBillController($uibModalInstance) {
            //   var vm = this;
            //   // vm.addBill = function () {
            //   //   $log.info('Add clicked')
            //   //   //TODO: post new bill
            //   //   // $uibModalInstance.close(vm.selected.item);
            //   // };
            //   //
            //   // vm.cancel = function () {
            //   //   $log.info('Cancel clicked')
            //   //   $uibModalInstance.dismiss('cancel');
            //   // };
            // }

            var modalInstance = $uibModal.open({
              animation: true,
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
