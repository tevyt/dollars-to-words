function convert(numericalRepresentation) {
  if (numericalRepresentation === 0) {
    return "zero";
  } else if (numericalRepresentation < 10) {
    return convertDigits(numericalRepresentation);
  } else if (numericalRepresentation < 20) {
    return convertNumbersLessThan20(numericalRepresentation);
  } else if (numericalRepresentation < 100) {
    return convertNumbersLessThan100(numericalRepresentation);
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
  switch (numericalRepresentation) {
    case 20:
      valueInWords = "twenty";
      break;
    case 30:
      valueInWords = "thirty";
      break;
    case 40:
      valueInWords = "fourty";
      break;
    case 50:
      valueInWords = "fifty";
      break;
    case 60:
      valueInWords = "sixty";
      break;
    case 70:
      valueInWords = "seventy";
      break;
    case 80:
      valueInWords = "eighty";
      break;
    case 90:
      valueInWords = "ninety";
      break;
  }
  return valueInWords;
}

module.exports = convert;
