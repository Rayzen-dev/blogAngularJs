(function () {
    'use strict';

    angular.module('app')
        .factory('FlashService', Service);

    function Service($rootScope) {
        let service = {};

        service.Success = Success;
        service.Error = Error;

        initService();

        return service;

        function initService() {
            $rootScope.$on('$locationChangeStart', function () {
                clearFlashMessage();
            });

            function clearFlashMessage() {
                var flash = $rootScope.flash;
                if (flash) {
                    if (!flash.keepAfterLocationChange) {
                        delete $rootScope.flash;
                    } else {
                        // only keep for a single location change
                        flash.keepAfterLocationChange = false;
                    }
                }
            }
        }

        function Success() {
            $rootScope.flash = {
                message:    message,
                type:       'success',
                keepAfterLocationChange: keepAfterLocationChange
            };
        }

        function Error() {
            $rootScope.flash = {
                message:    message,
                type:       'danger',
                keepAfterLocationChange: keepAfterLocationChange
            };
        }
    }

})();