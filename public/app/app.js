const app = angular.module('blog', ['UserService', 'ui-notification']);

app.config(function (NotificationProvider) {
    NotificationProvider.setOptions({
        delay: 5000,
        positionX: 'right',
        positionY: 'top',
        startTop: '30',
        startRight: '2'
    });
});