var calendarModule = angular.module('aa.ui');

function CalendarController($scope) {
    "use strict";

    $scope.viewType = 'day';
    $scope.selectedDate = new Date();

    $scope.zoomOut = function () {
        if ($scope.viewType === 'day')
            $scope.viewType = 'month';
        else if ($scope.viewType === 'month')
            $scope.viewType = 'year';
    };

    $scope.zoomIn = function () {
        if ($scope.viewType === 'year')
            $scope.viewType = 'month';
        else if ($scope.viewType === 'month')
            $scope.viewType = 'day';
    };
}

calendarModule.constant('aaCalendarConfig', {
    dateFormat: 'yyyy-MM-dd'
});

calendarModule.directive('aaCalendar', function ($compile, $document, $timeout, aaCalendarConfig) {
    "use strict";

    return {
        restrict: 'A',
        template: '',
        controller: 'CalendarController',
        scope: {},
        link: function (scope, element) {


            var body = $document.find('body').eq(0),
                popoverElementHtml = '<div aa-calendar-popover />',
                popoverElement = $compile(popoverElementHtml)(scope);

            element.on('focus', function () {
                body.append(popoverElement);
            });

            element.on('blur', function () {
                popoverElement.remove();
            });
        }
    };
});
