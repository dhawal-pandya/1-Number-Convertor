import errorString from './errorString';
import {
  isValidPositiveNumber,
  isValidRomanNumeral,
  isValidHexNumber,
} from './checker';
import { decimalToRoman, hexToRoman } from './converter';

const useConvertToRoman = (str) => {
  if (str === '0') {
    return "They didn't know about Zero";
  }

  if (str < 0) {
    return "They didn't know about Negatives either";
  }

  return isValidPositiveNumber(str)
    ? decimalToRoman(str)
    : isValidHexNumber(str)
    ? hexToRoman(str)
    : isValidRomanNumeral(str)
    ? str
    : errorString;
};

export default useConvertToRoman;
