const HUNDRED = "hundred";
const THOUSAND = "thousand";

const suffix = {
  [HUNDRED]: 100,
  [THOUSAND]: 1000,
};

function convert(numericalRepresentation) {
  if (numericalRepresentation === 0) {
    return "zero";
  } else if (numericalRepresentation < 10) {
    return convertDigits(numericalRepresentation);
  } else if (numericalRepresentation < 20) {
    return convertNumbersLessThan20(numericalRepresentation);
  } else if (numericalRepresentation < 100) {
    return convertNumbersLessThan100(numericalRepresentation);
  } else {
    const scale = numericalRepresentation < 1000 ? HUNDRED : THOUSAND;
    return convertLargeNumber(numericalRepresentation, scale);
  }
}

function convertDigits(digit) {
  switch (digit) {
    case 1:
      return "one";
    case 2:
      return "two";
    case 3:
      return "three";
    case 4:
      return "four";
    case 5:
      return "five";
    case 6:
      return "six";
    case 7:
      return "seven";
    case 8:
      return "eight";
    case 9:
      return "nine";
  }
}

function convertNumbersLessThan20(numericalRepresentation) {
  switch (numericalRepresentation) {
    case 10:
      return "ten";
    case 11:
      return "eleven";
    case 12:
      return "twelve";
    case 13:
      return "thirteen";
    case 14:
      return "fourteen";
    case 15:
      return "fifteen";
    case 16:
      return "sixteen";
    case 17:
      return "seventeen";
    case 18:
      return "eighteen";
    case 19:
      return "nineteen";
  }
}

function convertNumbersLessThan100(numericalRepresentation) {
  let valueInWords = "";
  if (numericalRepresentation < 30) {
    valueInWords = "twenty";
  } else if (numericalRepresentation < 40) {
    valueInWords = "thirty";
  } else if (numericalRepresentation < 50) {
    valueInWords = "fourty";
  } else if (numericalRepresentation < 60) {
    valueInWords = "fifty";
  } else if (numericalRepresentation < 70) {
    valueInWords = "sixty";
  } else if (numericalRepresentation < 80) {
    valueInWords = "seventy";
  } else if (numericalRepresentation < 90) {
    valueInWords = "eighty";
  } else {
    valueInWords = "ninety";
  }

  const remainder = numericalRepresentation % 10;
  if (remainder > 0) {
    valueInWords += `-${convertDigits(remainder)}`;
  }
  return valueInWords;
}

function convertLargeNumber(numericalRepresentation, scale) {
  let valueInWords = `${convert(
    Math.floor(numericalRepresentation / suffix[scale])
  )} ${scale}`;
  const remainder = numericalRepresentation % suffix[scale];
  if (remainder > 0) {
    if (remainder < 100) {
      valueInWords += ` and ${convert(remainder)}`;
    } else {
      valueInWords += `, ${convert(remainder)}`;
    }
  }
  return valueInWords;
}

module.exports = convert;
