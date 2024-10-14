function init() {
  const userKm = getUserKm();
  const userAge = getUserAge();

  if (isNaN(userKm) || isNaN(userAge))
    return console.error("I kilometri e l'eta devono essere numeri validi");

  const totalPrice = calcTotalPrice(partialPrice, userKm, userAge);

  console.log("Ticket price:", totalPrice);
}

init();
