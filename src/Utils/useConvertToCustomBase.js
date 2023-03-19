import errorString from './errorString';
import {
  isValidPositiveNumber,
  isValidRomanNumeral,
  isValidHexNumber,
} from './checker';
import { decimalToCustomBase, hexToDecimal, romanToDecimal } from './converter';

const useConvertToCustomBase = (str, base) => {
  return isValidPositiveNumber(base)
    ? isValidPositiveNumber(str)
      ? decimalToCustomBase(str, base)
      : isValidRomanNumeral(str)
      ? decimalToCustomBase(romanToDecimal(str), base)
      : isValidHexNumber(str)
      ? decimalToCustomBase(hexToDecimal(str), base)
      : errorString
    : errorString;
};

export default useConvertToCustomBase;
