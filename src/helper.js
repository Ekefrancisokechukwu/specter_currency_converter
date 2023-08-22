export const formatedPrice = (number, $currency) => {
  return Intl.NumberFormat("en-US", {
    style: "currency",
    currency: $currency,
  }).format(number);
};
