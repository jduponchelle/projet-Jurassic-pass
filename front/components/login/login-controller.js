angular.module('mainApp').controller('loginController', function($scope, $http, $state){
    $scope.login = login;

    function login(){
        let user = {
            username: $scope.username,
            password: $scope.password
        };

        

        $http.post("https://jurassic-pass.herokuapp.com/login", user).then(function (res) {
            let token = res.data.content;
            sessionStorage.setItem('token', token);
            $state.reload();

            if(token){
                swal({
                    title: "You are now logged in",
                    icon: "success",
                    timer: 3000
                });
                $state.go('cart');
            }else{
                console.log('acesse denied, wrong token')
            }
        }).catch(function(error){
            swal({
                title:"Username or password invalid",
                icon: "error",
                timer: 3000
            });
        });
    }
 
});