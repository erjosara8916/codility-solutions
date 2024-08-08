/**
 * Find longest sequence of zeros in binary representation of an integer.
 * @param {*} number 
 * @returns 
 */
export function solution (number = 0) {
  if (number < 0) return 0;
  
  const binaryNumber = number.toString(2);
  const firstOneNumberPosition = binaryNumber.indexOf('1');
  const lastOneNumberPosition = binaryNumber.lastIndexOf('1');
  const wrappedDigitsByOne = binaryNumber.substring(
    firstOneNumberPosition, 
    lastOneNumberPosition + 1
  );
  const binaryGaps = wrappedDigitsByOne.split('1');

  const longestSequenceOfZeros = Math.max(
    ...binaryGaps.map(gap => gap.length)
  );

  return longestSequenceOfZeros;
}