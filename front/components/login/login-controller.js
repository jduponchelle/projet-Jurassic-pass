angular.module('mainApp').controller('loginController', function($scope, $http, $state){
    $scope.login = login;

    function login(){
        let user = {
            username: $scope.username,
            password: $scope.password
        };

        

        $http.post("http://localhost:1407/login", user).then(function (res) {
            let token = res.data.content;

            sessionStorage.setItem('token', token);
            $state.reload();

            if(token){
                alert('token ok');
                $state.go('cart');
            }
        });
    }
 
});