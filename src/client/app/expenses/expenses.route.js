(function() {
    'use strict';

    angular
        .module('app.expenses')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'expenses',
                config: {
                    url: '/expenses',
                    templateUrl: 'app/expenses/expenses.html',
                    controller: 'ExpensesController',
                    controllerAs: 'vm',
                    title: 'expenses',
                    settings: {
                        nav: 3,
                        content: '<i class="fa fa-dashboard"></i> Expenses'
                    }
                }
            }
        ];
    }
})();
