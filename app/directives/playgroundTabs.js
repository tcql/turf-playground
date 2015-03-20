angular.module('turf-playground').directive('playgroundTabs', function () {
    return {
        restrict: 'A',
        scope: {
            playgroundTabs:'='
        },
        link: function (scope, elem, attrs) {
            scope.$watch("playgroundTabs.name", function (name) {
                elem.find('.tab').each(function () {
                    $(this).removeClass('selected');
                });
                elem.find("[data-name='"+name+"']").addClass('selected');
            });

            elem.on('click', '.tab', function (c) {
                scope.playgroundTabs.name = $(this).data('name')
                scope.$apply();
            });
        }
    };
});
