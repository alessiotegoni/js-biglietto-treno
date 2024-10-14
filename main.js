function init() {
  const userKm = getUserKm();
  const userAge = getUserAge();

  if (!userKm || !userAge) return alert("Campi obbligatori");

  if ([userKm, userAge].every((p) => isNaN(p)))
    return console.error("I kilometri e l'eta devono essere numeri validi");

  const partialPrice = calcPartialPrice(userKm);

  const totalPrice = calcTotalPrice(partialPrice, userAge);

  console.log("Ticket price:", totalPrice);
}

init();
