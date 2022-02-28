const persianNumbers = [
  /۰/g,
  /۱/g,
  /۲/g,
  /۳/g,
  /۴/g,
  /۵/g,
  /۶/g,
  /۷/g,
  /۸/g,
  /۹/g,
];
const arabicNumbers = [
  /٠/g,
  /١/g,
  /٢/g,
  /٣/g,
  /٤/g,
  /٥/g,
  /٦/g,
  /٧/g,
  /٨/g,
  /٩/g,
];

export const convertDigitToEnglish = (str) => {
  if (typeof str === "string") {
    for (var i = 0; i < 10; i++) {
      str = str.replace(persianNumbers[i], i).replace(arabicNumbers[i], i);
    }
  }
  return str;
};

export const convertNumberToPersian = (num) => {
  let info = num.toString()
    info = info.replaceAll("0", "۰")
    .replaceAll("1", "۱")
    .replaceAll("2", "۲")
    .replaceAll("3", "۳")
    .replaceAll("4", "۴")
    .replaceAll("5", "۵")
    .replaceAll("6", "۶")
    .replaceAll("7", "۷")
    .replaceAll("8", "۸")
    .replaceAll("9", "۹")
    .replaceAll(1, "۱")
    .replaceAll(2, "۲")
    .replaceAll(3, "۳")
    .replaceAll(4, "۴")
    .replaceAll(5, "۵")
    .replaceAll(6, "۶")
    .replaceAll(7, "۷")
    .replaceAll(8, "۸")
    .replaceAll(9, "۹")
    return info

  

};
