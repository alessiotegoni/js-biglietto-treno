const getUserKm = () => Number(prompt("Quanti chilometri vuoi percorrere?"));
const getUserAge = () => Number(prompt("Quanti anni hai?"));

const calcPriceWithDiscount = (partialPrice, discountValue) =>
  partialPrice - (partialPrice * discountValue) / 100;

const calcTotalPrice = (userKm, userAge) => {
  const partialPrice = userKm * PRICE_FOR_KM;

  let discountValue;

  if (userAge < 18) discountValue = MINOR_DISCOUNT;
  if (userAge > 65) discountValue = OVER_AGED_DISCOUNT;

  const hasDiscount = !!discountValue;

  const totalPrice = hasDiscount
    ? calcPriceWithDiscount(partialPrice, discountValue)
    : partialPrice;

  return parseFloat(totalPrice.toFixed(2));
};
