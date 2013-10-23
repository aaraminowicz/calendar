describe('Datepicker popover directive', function () {
    "use strict";

    var popover, scope;

    beforeEach(module('aa.ui'));
    beforeEach(inject(function ($compile, $rootScope) {
        var elementHtml = '<div aa-datepicker-popover></div>';

        scope = $rootScope;
        popover = $compile(elementHtml)(scope);
    }));


    it('should generate header', function () {
        console.log(popover);
        expect(popover.find('.title').length).toBe(1);
    });
});
