angular.module('mainApp').controller('passController', function ($scope, $http, $state) {

    function _showProduct() {
        $http.get("https://jurassic-pass.herokuapp.com/showProducts").then(function (res) {
            $scope.productList = res.data.content
            console.log(res.data.content);
        })
    };


    $scope.addToCart = _addToCart;


    function _checkSession() {
        if (sessionStorage.length === 0) {
            sessionCart = [];
            sessionStorage.setItem('sessionCart', JSON.stringify(sessionCart));
        };
    };

    function _addToCart() {


        console.log(this.product.title);
        console.log('controller ok');

        let productTitle = {
            title: this.product.title
        };

        $http.post("https://jurassic-pass.herokuapp.com/addToCart", productTitle).then(function (res) {

            // GET THE SESSION STORAGE ARRAY AND PARSE IT
            let products = JSON.parse(sessionStorage.getItem('sessionCart'));
            let foundProduct = products.findIndex(function (element) {
                return element.title == productTitle.title;
            });
            console.log(foundProduct);

            let quantity = 1;

            if (foundProduct == -1) {
                console.log('push le produit dans products')
                // PUSH THE SELECTED ITEMS IN THE ARRAY
                products.push({
                    title: res.data.content.title,
                    price: res.data.content.price,
                    quantity: quantity,
                    imagePath: res.data.content.imagePath
                });
                swal({
                        title: "'" + res.data.content.title + "'" + " is now in your cart",
                        icon: "success",
                        buttons: {
                            continue: "Continue shopping!",
                            goto: "Go to cart!"
                        }
                    })
                    .then((value) => {
                        switch (value) {

                            case "continue":
                                $state.go('tickets');
                                break;

                            case "goto":
                                $state.go('cart')
                                break;
                        }
                    });
            } else {
                swal({
                    title: "'" + res.data.content.title + "'" + " is already in your cart",
                    text: "You can icrease this product in your cart",
                    icon: "info",
                    timer: 3000
                })
            };



            //  STRINGIFY THE NEW ARRAY AND SET IT TO THE LOCALE STORAGE
            sessionStorage.setItem('sessionCart', JSON.stringify(products));
        })
    }

    _checkSession();
    _showProduct();
});