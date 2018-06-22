angular.module('mainApp').controller('cartController', function ($scope, $http, $state) {

    let myProduct = JSON.parse(sessionStorage.getItem('sessionCart'));
    console.log(myProduct);
    $scope.myProduct = myProduct;
    $scope.clearCart = _clearCart;
    $scope.checkout = checkout;



    $scope.total = function () {
        var total = 0;
        angular.forEach(myProduct, function (item) {
            total += item.price * item.quantity;
        })

        return total;
    };


    // function _removeItem(index){
    //         myProduct.splice(index, 1);
    //         sessionStorage.setItem('sessionCart', JSON.stringify(myProduct));
    //         $state.reload();
    // }


    function _clearCart(){
        swal({
            title: "Are you sure to clear cart ?", 
            icon: "warning",
            buttons: {
              cancel: "Cancel",
              clear: "Clear cart"
            }
          })
          .then((value) => {
            switch (value) {
           
              case "cancel":
                $state.go('cart');
                break;
           
              case "clear":
                myProduct =[]; 
                sessionStorage.setItem('sessionCart', JSON.stringify(myProduct));
                $state.reload();
                swal({
                    title : "your cart is empty",
                    icon: "info",
                    timer: 3000
                })
                break;
            }
          });
    };

    function checkout(){
        
        if (myProduct.length === 0){
            swal({
                title : "your cart is empty",
                icon: "info",
                timer: 3000
            })
        }else{
            $state.go('checkout');
        }
    }


});