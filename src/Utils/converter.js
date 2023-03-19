export const decimalToRoman = (num) => {
  const decimalValues = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const romanNumerals = [
    'M',
    'CM',
    'D',
    'CD',
    'C',
    'XC',
    'L',
    'XL',
    'X',
    'IX',
    'V',
    'IV',
    'I',
  ];
  let romanNum = '';

  for (let i = 0; i < decimalValues.length; i++) {
    while (decimalValues[i] <= num) {
      romanNum += romanNumerals[i];
      num -= decimalValues[i];
    }
  }

  return romanNum;
};

export const decimalToCustomBase = (decimalNumber, base) => {
  if (decimalNumber === 0) {
    return '0';
  }

  const customBaseChars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let result = '';

  while (decimalNumber > 0) {
    const remainder = decimalNumber % base;
    result = customBaseChars[remainder] + result;
    decimalNumber = Math.floor(decimalNumber / base);
  }

  return result;
};

export const decimalToHex = (decimal) => {
  return decimalToCustomBase(decimal, 16);
};

export const romanToDecimal = (romanNumeral) => {
  const decimalValues = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let decimal = 0;

  for (let i = 0; i < romanNumeral.length; i++) {
    const current = decimalValues[romanNumeral[i]];
    const next = decimalValues[romanNumeral[i + 1]];
    if (next && current < next) {
      decimal -= current;
    } else {
      decimal += current;
    }
  }

  return decimal;
};

export const romanToHex = (roman) => {
  let temp1 = romanToDecimal(roman);
  let temp2 = decimalToCustomBase(temp1, 16);
  return temp2;
};

export const hexToDecimal = (hex) => {
  return parseInt(hex, 16);
};

export const hexToRoman = (hex) => {
  let temp1 = hexToDecimal(hex);
  let temp2 = decimalToRoman(temp1);
  return temp2;
};

export const customBaseToDecimal = (num, base) => {
  let decimal = 0;
  num = num.toString();
  const length = num.length;

  for (let i = 0; i < length; i++) {
    const digit = parseInt(num[length - i - 1], base);
    decimal += digit * Math.pow(base, i);
  }

  return decimal;
};
