const getUserKm = () => prompt("Quanti chilometri vuoi percorrere?");
const getUserAge = () => prompt("Quanti anni hai?");

const calcPriceWithDiscount = (partialPrice, discountValue) =>
  partialPrice - (partialPrice * discountValue) / 100;

const calcPartialPrice = (userKm) => userKm * PRICE_FOR_KM;

const calcTotalPrice = (partialPrice, userAge) => {
  let discountValue;

  userAge = Number(userAge);

  if (userAge < 18) discountValue = MINOR_DISCOUNT;
  if (userAge > 65) discountValue = OVER_AGED_DISCOUNT;

  const hasDiscount = !!discountValue;

  const totalPrice = hasDiscount
    ? calcPriceWithDiscount(partialPrice, discountValue)
    : partialPrice;

  return parseFloat(totalPrice.toFixed(2));
};
