export const convertCamelCaseToTitleCase = (str) => {
  const convert = str.replace("Items", "").replace(/([A-Z])/g, " $1");
  return convert.charAt(0).toUpperCase() + convert.slice(1);
};

export const convertTitleCaseToCamelCase = (str) => {
  return str
    .replace(/\s(.)/g, ($1) => $1.toUpperCase())
    .replace(/\s/g, "")
    .replace(/^(.)/, ($1) => $1.toLowerCase());
};
