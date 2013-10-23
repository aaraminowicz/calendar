angular.module('aa.ui').directive('aaDatepickerPopover', function () {
    "use strict";

    return {
        restrict: 'A',
        replace: true,
        templateUrl: 'templates/calendar-popover.tpl.html',
        scope: {}
    };
});