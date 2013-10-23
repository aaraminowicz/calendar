describe('Calendar directive', function () {
    "use strict";

    var element,
        body;

    beforeEach(module('aa.ui'));
    beforeEach(inject(function ($compile, $rootScope, $document) {
        var elementHtml = '<input aa-calendar />';

        body = $document.find('body').eq(0);
        element = $compile(elementHtml)($rootScope);
    }));

    afterEach(function () {
        body.empty();
    });

    it('should create and attach popover to body on input focus', function () {
        body.append(element);

        var popover = body.find('[aa-calendar-popover]');
        expect(popover.length).toBe(0)

        element.focus();

        popover = body.find('[aa-calendar-popover]');
        expect(popover.length).toBe(1);
    });
});

describe('Focused calendar directive', function () {
    "use strict";

    var body, element, scope;

    beforeEach(module('aa.ui'));
    beforeEach(inject(function ($compile, $rootScope, $document) {
        var elementHtml = '<input aa-calendar />';

        scope = $rootScope;
        scope.selectedDate = new Date(2013, 10, 23);

        body = $document.find('body');
        element = $compile(elementHtml)(scope);
        body.append(element);
        element[0].focus();
    }));

    afterEach(function () {
        body.empty();
    });

    it('should remove popover from body on input blur', function () {
        element[0].blur();

        var popover = body.find('.popover');
        expect(popover.length).toBe(0);
    });
});