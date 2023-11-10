function ticketPrice (ticketQuantity){
   const first100Rate = 100;
   const second100Rate = 90;
   const restTicketRate = 70;
   if (ticketQuantity <= 100){
      const price = ticketQuantity * first100Rate;
      return price;
   }
   else if (ticketQuantity <= 200){
      const first100price = 100 * first100Rate;
      const restTicketQuantity =ticketQuantity -100;
      const restTicketPrice = restTicketQuantity * second100Rate;
      const totalPrice = first100price + restTicketPrice;
      return totalPrice;
   }
   else {
      const first100price = 100 * first100Rate;
      const second100price = 100 * second100Rate;
      const restTicketQuantity = ticketQuantity - 200;
      const restTicketPrice = restTicketQuantity * restTicketRate;
      const totalCost = first100price + second100price +restTicketPrice;
      return totalCost;
   }

   
} 
const price = ticketPrice(120);
console.log(price);