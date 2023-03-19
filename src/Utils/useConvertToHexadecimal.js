import errorString from './errorString';
import {
  isValidPositiveNumber,
  isValidRomanNumeral,
  isValidHexNumber,
} from './checker';
import { decimalToHex, romanToHex } from './converter';

const useConvertToHexadecimal = (str) => {
  return isValidPositiveNumber(str)
    ? decimalToHex(str)
    : isValidRomanNumeral(str)
    ? romanToHex(str)
    : isValidHexNumber(str)
    ? str
    : errorString;
};

export default useConvertToHexadecimal;
