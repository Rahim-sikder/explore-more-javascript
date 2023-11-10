// let sum = 0;
// for (let i =0; i<=5; i++){
//    sum = sum + i;
//    console.log(sum)
// }

// let sum = 0;
// for (let i =5; i>=1; i--){
//    sum = sum + i;
//    console.log(sum);
// }

function sum(){
   if (i==1){
      return i;
   }
   return i+sum(i-1);
}
const result = sum(5);
console.log(result);