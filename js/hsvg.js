directive('hsvg', ['$compile', function($compile) {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            cssclass: '@class',
            hsvghref: '@hsvghref',
            ngClass: '='
        },

        template: "<svg class='{{cssclass}}'><use xlink:href='{{href}} '/></svg>",

        link: function(scope, element, attrs, template) {
            scope.href = '#icon-' + scope.hsvghref;

        }
    }
}]);