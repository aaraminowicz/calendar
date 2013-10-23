describe('Calendar Controller', function () {
    "use strict";

    var Ctrl, scope,
        oldDate = Date;

    beforeEach(module('aa.ui'));
    beforeEach(inject(function ($controller, $rootScope) {
        Date = function () {
            return new oldDate('2012-12-20');
        };

        scope = $rootScope;
        Ctrl = $controller('CalendarController', {$scope: scope});
    }));

    afterEach(function () {
        Date = oldDate;
    });


    it('should set default view type to day', function () {
        expect(scope.viewType).toBe('day');
    });

    it('should select default date as today', function () {
        var now = new Date();
        expect(scope.selectedDate.getTime()).toBe(now.getTime());
    });

    it('should zoom out view when possible', function () {
        expect(scope.viewType).toBe('day');
        scope.zoomOut();
        expect(scope.viewType).toBe('month');
        scope.zoomOut();
        expect(scope.viewType).toBe('year');
    });

    it('should not zoom out view when not possible', function () {
        scope.viewType = 'year';
        scope.zoomOut();
        expect(scope.viewType).toBe('year');
    });

    it('should zoom in view when possible', function () {
        scope.viewType = 'year';
        scope.zoomIn();
        expect(scope.viewType).toBe('month');
        scope.zoomIn();
        expect(scope.viewType).toBe('day');
    });

    it('should not zoom in view whe not possible', function () {
        scope.viewType = 'day';
        scope.zoomIn();
        expect(scope.viewType).toBe('day');
    });
});