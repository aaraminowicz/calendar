angular.module('aa.ui').directive('aaDatepickerPopover', function () {
    "use strict";

    return {
        restrict: 'EA',
        replace: true,
//        template: '<div><div class="title"></div></div>',
        templateUrl: 'templates/calendar-popover.tpl.html',
        scope: {}
    };

});