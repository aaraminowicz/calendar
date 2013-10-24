angular.module('aa.ui').directive('aaDatepickerPopover', function () {
    "use strict";

    return {
        restrict: 'EA',
        replace: true,
        controller: 'DatepickerPopoverController',
        templateUrl: 'templates/calendar-popover.tpl.html',
        scope: {},
        link: function (scope, element, attrs) {
            scope.weeks = [0,1,2,3,4,5];
        }
    };

});