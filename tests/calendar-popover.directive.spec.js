describe('Datepicker popover directive', function () {
    "use strict";

    var popover, scope;

    beforeEach(function () {
        module('aa.ui', 'templates/calendar-popover.tpl.html');
    });
    beforeEach(inject(function ($compile, $rootScope, $templateCache) {
//        console.log($templateCache.get('templates/calendar-popover.tpl.html'));
        var elementHtml = angular.element('<div><div aa-datepicker-popover></div></div>');

        scope = $rootScope;
        popover = $compile(elementHtml)(scope);
        scope.$digest();
    }));


    it('should generate header', function () {
        expect(popover.find('.title').length).toBe(1);
    });
});
