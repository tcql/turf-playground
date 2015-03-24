angular.module('turf-playground').service('docService', function ($rootScope, $sce, examplesService) {
    var self = this;
    this.show = false;
    this.content = '';
    this.show_default = true;
    this.examples = examplesService;

    this.reset = function () {
        self.show_default = true;
        self.content = '';
    }

    this.toggleShow = function () {
        self.show = !self.show;
        return self.show;
    }

    this.setContent = function (content) {
        self.show_default = false;
        self.content = $sce.trustAsHtml(content);
    }

    this.findDoc = function(selected) {
        var matches = selected.match(/turf\.\w+/);
        self.reset();
        if (matches && matches.length > 0) {
            // Search and display the docs for the searched
            // turf method (if it exists)
            var ex = examplesService.findExample(matches[0]);
            if (ex) {
                self.setContent(ex.desc);
            }
        }
        self.show = true;

        if (!$rootScope.$$phase) {
            $rootScope.$apply();
        }
    }

    this.reset();
});
