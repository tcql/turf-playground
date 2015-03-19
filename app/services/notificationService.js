angular.module('turf-playground').service('notificationService', function () {
    var self = this;
    var index = 0;

    this.messages = {};
    this.notify = function (msg) {
        index++;
        self.messages[index] = msg;
    };
});
