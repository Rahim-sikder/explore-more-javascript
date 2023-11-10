const shoppingCart =[
   {product_name: 'shoe',price:1200},
   {product_name: 'shirt',price:1500},
   {product_name: 'shirt',price:1300},
   {product_name: 'Tshirt',price:1000}
];
function totalCost(products){
   let sum =0;
   for (let i=0; i<products.length; i++){
      const product = products[i];
      sum = sum + product.price;
     
   }
   return sum;
}
const expense=totalCost(shoppingCart);
console.log('total expense:',expense);