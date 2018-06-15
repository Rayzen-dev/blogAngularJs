app.controller('registerController', function ($scope, $http, $timeout, UserService) {

    $scope.availableUsername = false;
    $scope.availableMail = false;
    $scope.ajaxProcess = false;
    $scope.acceptRegister = true;
    $scope.error = {};

    var acceptRegister, typingTimer, doneTypingTimer = 1500;

    $scope.checkMail = data => {
        checkProcess(data, {mail: data});
    };

    $scope.checkUsername = data => {
        checkProcess(data, {username: data});
    };

    //  --------------------

    function checkProcess(data, filter) {
        $scope.ajaxProcess = true;
        $timeout.cancel(typingTimer);
        typingTimer = $timeout(function () {
            UserService.getVerification(filter)
                .then(res => {
                    switch (res.field) {
                        case 'mail':
                            $scope.availableMail = res.exist > 0 ? false : true;
                        break;

                        case 'username':
                            $scope.availableUsername = res.exist > 0 ? false : true;
                            break;
                    }
                });
            $scope.ajaxProcess = false;
        }, doneTypingTimer);

    }

    $scope.register = (e, data) => {
        e.preventDefault();
        console.log(data);
    };

});