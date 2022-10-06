export const numberFormat = (number) => {
  const options = { style: "currency", currency: "THB" };

  const newFormatNum = new Intl.NumberFormat("th-TH", options);

  return newFormatNum.format(number);
};
