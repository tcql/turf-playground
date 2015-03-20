angular.module('turf-playground').service('notificationService', function (growl) {
    var self = this;
    var index = 0;

    this.messages = {};
    this.notify = function (status, msg, ttl) {
        ttl = ttl || 2000;

        growl[status](msg, {
            disableIcons: true,
            disableCloseButton: true,
            disableCountDown: true,
            ttl: ttl
        });
    };
});
