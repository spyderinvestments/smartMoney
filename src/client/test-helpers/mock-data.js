/* jshint -W079 */
var mockData = (function () {
    return {
        getMockPeople: getMockBills,
        getMockStates: getMockStates
    };

    function getMockStates() {
        return [{
            state: 'dashboard',
            config: {
                url: '/',
                templateUrl: 'app/dashboard/dashboard.html',
                title: 'dashboard',
                settings: {
                    nav: 1,
                    content: '<i class="fa fa-dashboard"></i> Dashboard'
                }
            }
        }];
    }

    function getMockBills() {
        return [{
            '_id': '56f0aad96421a9d540c80cf1',
            'due': '2016-03-15T07:00:00.000Z',
            'amount': '43',
            '__v': 0,
            'notes': 'none',
            'paid': false,
            'split': []
        }, {
            '_id': '56f0aada6421a9d540c80cf2',
            'due': '2016-03-15T07:00:00.000Z',
            'amount': '43',
            '__v': 0,
            'notes': 'none',
            'paid': false,
            'split': []
        }, {
            '_id': '56f0aadb6421a9d540c80cf3',
            'due': '2016-03-15T07:00:00.000Z',
            'amount': '43',
            '__v': 0,
            'notes': 'none',
            'paid': false,
            'split': []
        }, {
            '_id': '56f0aadc6421a9d540c80cf4',
            'due': '2016-03-15T07:00:00.000Z',
            'amount': '43',
            '__v': 0,
            'notes': 'none',
            'paid': false,
            'split': []
        }, {
            '_id': '56f0aadc6421a9d540c80cf5',
            'due': '2016-03-15T07:00:00.000Z',
            'amount': '43',
            '__v': 0,
            'notes': 'none',
            'paid': false,
            'split': []
        }, {
            '_id': '56f0aadd6421a9d540c80cf6',
            'due': '2016-03-15T07:00:00.000Z',
            'amount': '43',
            '__v': 0,
            'notes': 'none',
            'paid': false,
            'split': []
        }, {
            '_id': '56f0ad0ca72254f640acdf80',
            'name': 'test bill',
            'due': '2016-03-15T07:00:00.000Z',
            'amount': '43',
            '__v': 0,
            'notes': 'none',
            'paid': false,
            'split': []
        }, {
            '_id': '56f0ad0ea72254f640acdf81',
            'name': 'test bill',
            'due': '2016-03-15T07:00:00.000Z',
            'amount': '43',
            '__v': 0,
            'notes': 'none',
            'paid': false,
            'split': []
        }, {
            '_id': '56f0ad0ea72254f640acdf82',
            'name': 'test bill',
            'due': '2016-03-15T07:00:00.000Z',
            'amount': '43',
            '__v': 0,
            'notes': 'none',
            'paid': false,
            'split': []
        }, {
            '_id': '56f0ad0ea72254f640acdf83',
            'name': 'test bill',
            'due': '2016-03-15T07:00:00.000Z',
            'amount': '43',
            '__v': 0,
            'notes': 'none',
            'paid': false,
            'split': []
        }, {
            '_id': '56f0ad0fa72254f640acdf84',
            'name': 'test bill',
            'due': '2016-03-15T07:00:00.000Z',
            'amount': '43',
            '__v': 0,
            'notes': 'none',
            'paid': false,
            'split': []
        }, {
            '_id': '56f0ad0fa72254f640acdf85',
            'name': 'test bill',
            'due': '2016-03-15T07:00:00.000Z',
            'amount': '43',
            '__v': 0,
            'notes': 'none',
            'paid': false,
            'split': []
        }, {
            '_id': '56f0ad0fa72254f640acdf86',
            'name': 'test bill',
            'due': '2016-03-15T07:00:00.000Z',
            'amount': '43',
            '__v': 0,
            'notes': 'none',
            'paid': false,
            'split': []
        }, {
            '_id': '56f0ad0fa72254f640acdf87',
            'name': 'test bill',
            'due': '2016-03-15T07:00:00.000Z',
            'amount': '43',
            '__v': 0,
            'notes': 'none',
            'paid': false,
            'split': []
        }];
    }
})();
