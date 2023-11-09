// const names =['abul','kabul','cabul','mokbul','abul','kabul','cabul','mokbul','abul','kabul','cabul','mokbul','abul','kabul','cabul','mokbul','mokbul'];
// function removeDuplicate(names){
//    const unique = [];
//    for (let i= 0; i < names.length; i++){
//     const name = names[i];
//       if(unique.includes(name)=== false){
//          unique.push(name)
//       }
//    }
//    return unique;
// }
// const uniqeNames = removeDuplicate(names);
// console.log(uniqeNames);
const numbers =[2,4,5,77,77,2,4,5,6,7,6,2,2,2,3,];
function removeDuplicateNumber(numbers){
   const unique = [0];
   for(let i =0; i<numbers.length; i++){
      const number = numbers[i];
      if (unique.includes(number)===false){
         unique.push(number);
      }

   }
   return unique;
}
const uniqueNumber = removeDuplicateNumber(numbers);
console.log(uniqueNumber);



