(function () {
    'use strict';

    angular
        .module('app.dashboard')
        .controller('DashboardController', DashboardController);

    DashboardController.$inject = ['$q', '$uibModal', 'dataservice', 'logger'];
    /* @ngInject */
    function DashboardController($q, $uibModal, dataservice, logger) {
        var vm = this;

        vm.allBills = [];
        vm.title = 'Dashboard';

        activate();

        function activate() {
            var promises = [getBills()];
            return $q.all(promises).then(function () {
                logger.info('Activated Dashboard View');
            });
        }

        function getBills() {
            return dataservice.getBills().then(function (data) {
                vm.allBills = data;
                return vm.allBills;
            });
        }

        // vm.addBill = function () {
        //   logger.info('Add clicked')
        //   //TODO: post new bill
        //   // $uibModalInstance.close(vm.selected.item);
        // };
        //
        // vm.cancel = function () {
        //   logger.info('Cancel clicked')
        //   $uibModalInstance.dismiss('cancel');
        // };
        vm.add = function () {

            function AddBillController($scope, $uibModalInstance) {
                var vm = $scope;
                $scope.addBill = function (bill) {
                    //TODO: post new bill
                    console.log('add new bill');
                    console.log(bill);
                    // $uibModalInstance.close($scope.selected.item);
                };

                $scope.cancel = function () {
                    console.log('cancel?');
                    $uibModalInstance.dismiss('cancel');
                };
            }

            var modalInstance = $uibModal.open({
                animation: true,
                controller: AddBillController,
                templateUrl: 'myModalContent.html'
            });

            modalInstance.result.then(function (selectedItem) {}, function () {
                logger.info('Modal dismissed at: ' + new Date());
            });
        };

    }
})();
