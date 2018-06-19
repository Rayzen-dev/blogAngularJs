angular.module('UserService', [])
    .config(function ($httpProvider) {
        $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
    })
    .factory('UserService', function($http, $q) {

    var service = {};

    service.getCurrent = getCuerrent;
    service.getAll = getAll;
    service.getById = getById;
    service.create = Create;
    service.delete = Delete;
    service.update = Update;
    service.getVerification = getVerifivcation;

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
        return $http.post('/api/users', user, {headers: {'Content-Type': 'application/json'}}).then(handleSuccess, handleError);
    }

    function Delete(_id) {
        return $http.delete('/api/users/'+_id).then(handleSuccess, handleError);
    }

    function Update(user) {
        return $http.put('/api/users/'+user.id, user).then(handleSuccess, handleError);
    }

    function getVerifivcation(filter) {
        for(let val in filter) {
            return $http.get('/api/users/verification?'+val+"="+filter[val]).then(handleSuccess, handleError);
        }
    }

    //  Handle errors
    function handleSuccess(res) {
        return res.data;
    }

    function handleError(err) {
        return $q.reject(err.data);
    }

});