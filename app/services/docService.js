angular.module('turf-playground').service('docService', function ($rootScope, examplesService) {
    var self = this;
    this.show = false;
    this.content = '';

    var default_content =
        "<h4>Welcome to turfjs.party Quick Docs</h4>" +
        "<p>" +
        "    To use Quick Docs, select a line of text which contains a turf" +
        "    function in the editor and either click the <strong>Quick Docs</strong>" +
        "    button or press Ctrl+I" +
        "</p>";

    this.reset = function () {
        self.content = default_content;
    }

    this.toggleShow = function () {
        self.show = !self.show;
        return self.show;
    }

    this.findDoc = function(selected) {
        var matches = selected.match(/turf\.\w+/);
        self.reset();
        if (matches && matches.length > 0) {
            // Search and display the docs for the searched
            // turf method (if it exists)
            var ex = examplesService.findExample(matches[0]);
            if (ex) {
                self.content = ex.desc;
            }
        }
        self.show = true;
        $rootScope.$apply();
    }

    this.reset();
});
