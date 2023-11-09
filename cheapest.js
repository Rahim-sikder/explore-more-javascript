const phones= [
   { name:'samsung', camera:12, storage: '32gb', price:320000, color:'silver' },
   { name:'walton', camera:12, storage: '32gb', price:3600, color:'silver' },
   { name:'iphone', camera:12, storage: '32gb', price:30000, color:'silver' },
   { name:'oppo', camera:12, storage: '32gb', price:22000, color:'silver' },
   { name:'Nokia', camera:12, storage: '32gb', price:50000, color:'silver' },
   { name:'Xaomi', camera:12, storage: '32gb', price:14000, color:'silver' },
   { name:'Htc', camera:12, storage: '32gb', price:4000, color:'silver' },
   { name:'Motorolla', camera:12, storage: '32gb', price:55000, color:'silver' },
];
function cheapestPhone (phones){
      let cheapest = phones [0];
   for (let i = 0; i< phones.length ; i++){
      const phone = phones[i];
     if(phone.price < cheapest.price){
      cheapest = phone;
     }
   }
   return cheapest;
}
const mySelection =cheapestPhone(phones);
console.log(mySelection);