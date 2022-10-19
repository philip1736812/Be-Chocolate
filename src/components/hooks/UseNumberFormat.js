export const currencyFormat = (number) => {
  const options = { style: "currency", currency: "THB" };

  const newFormatNum = new Intl.NumberFormat("th-TH", options);

  return newFormatNum.format(number);
};

export const numberFormat = (number) => {
  const newFormatNum = new Intl.NumberFormat();

  return newFormatNum.format(number);
};
