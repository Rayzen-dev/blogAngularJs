(function () {
    'use strict';
    
    angular.module('app')
        .factory('UserService', UserService);
    
    function UserService($http, $q) {

        var service = {};

        service.getCurrent = getCuerrent();
        service.getAll = getAll();
        service.getById = getById();
        service.create = Create();
        service.delete = Delete();
        service.update = Update();

        return service;

        function getCuerrent() {
            return $http.get('/api/users/current').then(handleSuccess, handleError);
        }

        function getAll() {
            return $http.get('/api/users').then(handleSuccess, handleError);
        }

        function getById(_id) {
            return $http.get('/api/users/' + _id).then(handleSuccess, handleError);
        }
        
        function Create(user) {
            return $http.post('/api/users', user).then(handleSuccess, handleError);
        }

        function Delete(_id) {
            return $http.delete('/api/users/'+_id).then(handleSuccess, handleError);
        }

        function Update(user) {
            return $http.put('/api/users/'+user.id, user).then(handleSuccess, handleError);
        }

        //  Handle errors
        function handleSuccess(res) {
            return res.data;
        }

        function handleError(err) {
            return $q.reject(err.data);
        }
        
    }
})();