angular.module('turf-playground').directive('playgroundAce', ['editorService', function (editor) {
    return {
        restrict: 'A',
        link: function (scope, elem) {
            id = elem.attr('id');
            editor.setEditor(ace.edit(id));
            editor.getEditor().setTheme("ace/theme/monokai");
            editor.getEditor().getSession().setMode("ace/mode/javascript");
        }
    };
}]);
