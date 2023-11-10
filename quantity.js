const shoppingCart =[
   {product_name: 'shoe',price:1200,quantity:2},
   {product_name: 'shirt',price:1500,quantity:5},
   {product_name: 'shirt',price:1300,quantity:4},
   {product_name: 'Tshirt',price:1000,quantity:3},
];
function totalCost(products){
   let sum =0;
   for (let i=0; i<products.length; i++){
      const product = products[i];
      const totaleProduct = product.price*product.quantity;
      sum = sum + totaleProduct;
     
   }
   return sum;
}
const expense=totalCost(shoppingCart);
console.log('total expense:',expense);