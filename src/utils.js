import moment from "moment";

export const numExtraction = str => {
  const matches = str.match(/[\d.]+/);

  return matches ? parseFloat(matches[0]) : 0;
};
export const getFormattedDate = (date = "", format) => {
  const momentDate = date ? moment(date) : moment();
  return momentDate
    .format(format)
    .split("-")
    .map(ds => numExtraction(ds))
    .join("-");
};

export const currencySign = {
  naira: "₦",
  dollar: "$",
  pound: "£",
  euro: "€"
};

export const setToken = token => {
  sessionStorage.setItem("token", token);
};

export const getToken = () => {
  return sessionStorage.getItem("token");
};

export const endSession = () => {
  sessionStorage.clear();
};

export const normalizeArray = (arr, key) => {
  const obj = {};
  arr.forEach(item => {
    const normalizer = item[key];
    obj[normalizer] = item;
  });
  return obj;
};
