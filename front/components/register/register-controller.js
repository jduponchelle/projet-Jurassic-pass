angular.module('mainApp').controller('registerController', function ($scope, $http, $state) {
    $scope.register = register;

    function register() {
        let user = {
            firstname: $scope.firstname,
            lastname: $scope.lastname,
            username: $scope.username,
            password: $scope.password,
        };
        $http.post("https://jurassic-pass.herokuapp.com/auth/signup", user).then(function (res, error) {
            swal({
                    title: "Your account is created",
                    icon: "success",
                })
                .then((value) => {
                    if (value) {
                        $state.go('login');
                    }
                });
        }).catch(function(error){
            swal({
                title:"Impossible to register",
                icon: "error",
                timer: 3000
            });
        });
    };
});