/* jshint -W117, -W030 */
describe('DashboardController', function() {
    var controller;
    var allBills = mockData.getMockPeople();

    beforeEach(function() {
        bard.appModule('app.dashboard');
        bard.inject('$controller', '$log', '$q', '$rootScope', 'dataservice');
    });

    beforeEach(function () {
        sinon.stub(dataservice, 'getBills').returns($q.when(allBills));
        controller = $controller('DashboardController');
        $rootScope.$apply();
    });

    bard.verifyNoOutstandingHttpRequests();

    describe('Dashboard controller', function() {
        it('should be created successfully', function () {
            expect(controller).to.be.defined;
        });

        describe('after activate', function() {
            it('should have title of Dashboard', function () {
                expect(controller.title).to.equal('Dashboard');
            });

            it('should have logged "Activated"', function() {
                expect($log.info.logs).to.match(/Activated/);
            });

            it('should have bills', function () {
                expect(controller.allBills).to.not.be.empty;
            });

            it('should have at least 1 person', function () {
                expect(controller.allBills).to.have.length.above(0);
            });

        });
    });
});
