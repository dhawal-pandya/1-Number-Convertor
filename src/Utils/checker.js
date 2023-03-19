/**
 * Checks if the given string is a valid positive number
 * @param {string} str - The input string to check
 * @returns {boolean} - True if the input string is a valid positive number, false otherwise
 */

export const isValidPositiveNumber = (str) => {
  // An empty string is considered valid
  if (str.length === 0) {
    return true;
  }

  // Check each character in the string
  for (let i = 0; i < str.length; i++) {
    const charCode = str.charCodeAt(i);

    // If any character is not a digit, the string is not a valid positive number
    if (charCode < 48 || charCode > 57) {
      return false;
    }
  }

  // All characters are digits, so the string is a valid positive number
  return true;
};

/**
 * Checks if the given string is a valid hexadecimal number
 * @param {string} str - The input string to check
 * @returns {boolean} - True if the input string is a valid hexadecimal number, false otherwise
 */
export const isValidHexNumber = (str) => {
  // Define the valid characters for a hexadecimal number
  const hexChars = '0123456789abcdefABCDEF';

  // Check each character in the string
  for (let i = 0; i < str.length; i++) {
    // If any character is not a valid hexadecimal character, the string is not a valid hexadecimal number
    if (!hexChars.includes(str[i])) {
      return false;
    }
  }

  // All characters are valid hexadecimal characters, so the string is a valid hexadecimal number
  return true;
};

/**
 * Checks if the given string is a valid Roman numeral
 * @param {string} str - The input string to check
 * @returns {boolean} - True if the input string is a valid Roman numeral, false otherwise
 */
export const isValidRomanNumeral = (str) => {
  // Define the values of each Roman numeral
  const romanNumerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let previousValue = 0;
  let totalValue = 0;

  // Iterate over each character in the string
  for (let i = 0; i < str.length; i++) {
    const currentValue = romanNumerals[str[i]];

    // If the character is a valid Roman numeral
    if (currentValue) {
      totalValue += currentValue;

      // If the current value is greater than the previous value, subtract twice the previous value
      if (previousValue < currentValue) {
        totalValue -= 2 * previousValue;
      }

      previousValue = currentValue;
    } else {
      // If a non-Roman numeral character is found, the string is not a valid Roman numeral
      return false;
    }
  }

  // All characters are valid Roman numerals, so the string is a valid Roman numeral
  return true;
};
