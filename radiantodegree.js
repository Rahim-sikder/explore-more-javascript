function redianToDegree(redians){
     let redian = redians*(180/Math.PI);
     return redian;

}
let rediansValue = 1.5
const myRedian = redianToDegree(rediansValue);
console.log (myRedian);