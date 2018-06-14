app.controller('registerController', function ($scope, $http, UserService) {

    $scope.availableUsername = false;
    $scope.ajaxProcess = false;
    var typingTimer;
    var doneTypingTimer = 1500;

    $scope.checkUsername = username => {
        $scope.ajaxProcess = true;
        clearTimeout(typingTimer);
        typingTimer = setTimeout(function () {
            console.log(username);
            $scope.ajaxProcess = false;
        }, doneTypingTimer);
    };

    $scope.register = (e, data) => {
        e.preventDefault();
        console.log(data);
    };

});