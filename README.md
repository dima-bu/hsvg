# hsvg
Angular directive for work with svg sprites

```javascript
    .directive('hsvg', ['$compile', function($compile) {
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
```

```html
    <div ng-repeat="iconhref in iconsHrefs">
        <hsvg hsvghref="{{iconhref}}" class="md-size icon"></hsvg>
    </div>
```