angular.module('mainApp').controller('ticketsController', function ($scope, $http, $state) {

    $scope.addToCart = _addToCart;

    function _showProduct() {
        $http.get("http://localhost:1407/showProducts").then(function (res) {
            $scope.title1 = res.data.content[0].title;
            $scope.description1 = res.data.content[0].description;
            $scope.price1 = res.data.content[0].price;
            $scope.title2 = res.data.content[1].title;
            $scope.description2 = res.data.content[1].description;
            $scope.price2 = res.data.content[1].price;
            $scope.title3 = res.data.content[2].title;
            $scope.description3 = res.data.content[2].description;
            $scope.price3 = res.data.content[2].price;
            $scope.image3 = res.data.content[2].imagePath;
            console.log(res.data.content);
        })
    }
    
   
function _checkSession(){
    if(sessionStorage.length === 0){
        sessionCart = []; 
        sessionStorage.setItem('sessionCart', JSON.stringify(sessionCart));
       };
};   

    function _addToCart(value) {

        let productTitle = {
            title: value
        };

        $http.post("http://localhost:1407/addToCart", productTitle).then(function (res) {

            // GET THE SESSION STORAGE ARRAY AND PARSE IT
            let products = JSON.parse(sessionStorage.getItem('sessionCart'));
            let foundProduct = products.findIndex(function(element){
                return element.title == productTitle.title;
            });
            console.log(foundProduct);

            let quantity = 1;

            if(foundProduct == -1){
                console.log('push le produit dans products')
                // PUSH THE SELECTED ITEMS IN THE ARRAY
                products.push({
                    title: res.data.content.title,
                    price: res.data.content.price,
                    quantity: quantity
                });  
                swal({
                    title: "'"+res.data.content.title +"'"+ " is now in your cart", 
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
            }else{
                swal({
                    title: "'"+res.data.content.title +"'"+ " is already in your cart", 
                    text: "You can icrease this product in your cart",
                    icon: "info",
                    timer: 3000
                  })                
            };

       
            
            //  STRINGIFY THE NEW ARRAY AND SET IT TO THE LOCALE STORAGE
            sessionStorage.setItem('sessionCart', JSON.stringify(products));
        })
    }
    _showProduct();
    _checkSession();
});