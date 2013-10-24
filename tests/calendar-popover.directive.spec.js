describe('Datepicker popover directive', function () {
    "use strict";

    var popover, scope;

    beforeEach(function () {
        module('aa.ui', 'templates/calendar-popover.tpl.html');
    });
    beforeEach(inject(function ($compile, $rootScope, $templateCache) {
        var elementHtml = angular.element('<div aa-datepicker-popover />');

        scope = $rootScope;
        scope.selectedDate = new Date(2013, 10, 24);
        popover = $compile(elementHtml)(scope);
        scope.$digest();
    }));


    it('should generate header', function () {
        expect(popover.find('table thead tr th.title').length).toBe(1);
    });

    it('should generate week numbers', function () {
        var weeks = popover.find('table tbody tr td.week-number').map(function () {
            return parseInt($(this).text());
        }).get();

        expect(weeks).toBe([40, 41, 42, 43, 44, 45]);
    });

    it('should generate days', function () {

        var weeks = popover.find('table tbody tr');
        expect(weeks.length).toBe(6);

    });
});
