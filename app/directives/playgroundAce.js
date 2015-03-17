angular.module('turf-playground').directive('playgroundAce', function () {
    return {
        restrict: 'A',
        scope: {
            tools: '=playgroundAce'
        },
        link: function (scope, elem) {
            id = elem.attr('id');
            scope.tools.editor = ace.edit(id);
            scope.tools.editor.setTheme("ace/theme/monokai");
            scope.tools.editor.getSession().setMode("ace/mode/javascript");
        }
    };
})
