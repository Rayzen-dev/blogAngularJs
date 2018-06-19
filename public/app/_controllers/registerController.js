app.controller('registerController', function ($scope, $http, $timeout, UserService, Notification) {

    $scope.availableUsername = false;
    $scope.availableMail = false;
    $scope.ajaxProcess = false;
    $scope.acceptRegister = true;
    $scope.error = false;

    var acceptRegister, typingTimer, doneTypingTimer = 1500;

    $scope.checkMail = data => {
        if (data) {
            checkProcess(data, {mail: data});
        } else {
            $scope.availableMail = false;
        }
    };

    $scope.checkUsername = data => {
        if (data && data.length >= 5) {
            checkProcess(data, {username: data});
        } else {
            $scope.availableUsername = false;
        }
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

        if (data.password.length < 6) {
            $scope.error = true;

            $http.get('/api/translation/'+document.documentElement.lang+'/register.error.shortPassword').then(response=> {
                $scope.errorMessage = response.data;
            });

            $timeout(function () {
                Notification.error($scope.errorMessage);
            }, 100)

        }

        if (!$scope.ajaxProcess) {
            let user = {
                email: data.email,
                username: data.username,
                password: data.password
            };

            UserService.create(user);
        }
    };

});