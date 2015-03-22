angular.module('turf-playground').directive('cleanDocs', function () {
    return {
        restrict: 'A',
        link: function (scope, elem, attrs) {
            scope.$watch(attrs.ngBindHtml, function(val) {
                elem.find('table').addClass('pure-table');

                // Add prettyprint to the example code. Because doxme writes
                // github-style output, the example code is written as a <code>
                // inside of a <pre>, so find that pair, then add prettyprint to
                // the <pre>
                var code = elem.find('pre code').parent().addClass('prettyprint');
                prettyPrint();
            });
        }
    };
});
