import mongoose from 'mongoose';
import product from './product-schema';


  // vérifications et/ou création des produits

  let settingProduct = product.count({}, function (err, count) {
    if (count == 3) {
      console.log('Database OK')
    } else {
      product.create({
        imagePath: 'http://localhost:3000/docs/pass-1.png',
        title: '1 day pass',
        description: 'This pass alows you to enter Jurassic Park during an entire day.',
        price: 300
      }, function (err, productList) {
        if (err) return handleError(err);
      });

      product.create({
        imagePath: 'http://localhost:3000/docs/pass-2.png',
        title: '2 days pass',
        description: 'This pass alows you to enter Jurassic Park during two entire days.',
        price: 594.99
      }, function (err, productList) {
        if (err) return handleError(err); 
      });

      product.create({
        imagePath: 'http://localhost:3000/docs/pass-3.png',
        title: '3 days pass',
        description: 'This pass alows you to enter Jurassic Park during three entire days.',
        price: 1184.99
      }, function (err, productList) {
        if (err) return handleError(err);
      });

      console.log('3 products added successfuly');
    }
  });

  export default settingProduct;
