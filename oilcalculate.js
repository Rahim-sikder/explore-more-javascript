function oilPrice(diselQuantity,petrolQuantity,octenQuantity ){
   const perLiterDisel = 114;
   const perLiterPetrol =135;
   const perLiterOcten =130;
   const diselPrice = diselQuantity * perLiterDisel;
   const petrolPrice =petrolQuantity* perLiterOcten;
   const octenPrice =octenQuantity* perLiterPetrol;
   const totalOil =diselPrice+petrolPrice+octenPrice;
   return totalOil;
}

const totalOil = oilPrice(2,4,5);
console.log(totalOil);