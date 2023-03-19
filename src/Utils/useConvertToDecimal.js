import errorString from './errorString';
import {
  isValidPositiveNumber,
  isValidRomanNumeral,
  isValidHexNumber,
} from './checker';
import { hexToDecimal, romanToDecimal } from './converter';

const useConvertToDecimal = (str) => {
  return isValidPositiveNumber(str)
    ? str
    : isValidRomanNumeral(str)
    ? romanToDecimal(str)
    : isValidHexNumber(str)
    ? hexToDecimal(str)
    : errorString;
};

export default useConvertToDecimal;
