function convert(numericalRepresentation) {
  if (numericalRepresentation < 0) {
    throw new Error("Cannot convert negative value.");
  }

  let dollarPart = 0;
  let centPart = 0;

  if (Number.isInteger(numericalRepresentation)) {
    dollarPart = numericalRepresentation;
  } else {
    const numberAsString = numericalRepresentation.toString();
    const [dollarString, centString] = numberAsString.split(".");

    dollarPart = Number.parseInt(dollarString);
    centPart = getTwoMostSignificantDigits(Number.parseInt(centString));
  }

  return `${convertIntegerValue(dollarPart)} dollars and ${convertIntegerValue(
    centPart
  )} cents`;
}

//Only the two most significant digits for cents i.e. 0.764 => seventy-six cents, not seven hundred and sixty-four cents.
function getTwoMostSignificantDigits(number) {
  while (number >= 100) {
    number = Math.floor(number / 10);
  }
  return number;
}

function convertIntegerValue(numericalRepresentation) {
  if (numericalRepresentation === 0) {
    return "zero";
  } else if (numericalRepresentation < 10) {
    return convertIntegerValueLessThan10(numericalRepresentation);
  } else if (numericalRepresentation < 20) {
    return convertIntegerValueLessThan20(numericalRepresentation);
  } else if (numericalRepresentation < 100) {
    return convertIntegerValueGreaterThan20AndLessThan100(
      numericalRepresentation
    );
  } else {
    return convertValue100AndOver(numericalRepresentation);
  }
}

function convertIntegerValueLessThan10(digit) {
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

function convertIntegerValueLessThan20(numericalRepresentation) {
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

function convertIntegerValueGreaterThan20AndLessThan100(
  numericalRepresentation
) {
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
    valueInWords += `-${convertIntegerValueLessThan10(remainder)}`;
  }
  return valueInWords;
}

function convertValue100AndOver(numericalRepresentation) {
  const HUNDRED = "hundred";
  const THOUSAND = "thousand";
  const MILLION = "million";
  const BILLION = "billion";
  const TRILLION = "trillion";
  const QUADRILLION = "quadrillion";

  const ONE_HUNDRED = 100;
  const ONE_THOUSAND = 1000;
  const ONE_MILLION = 1000000;
  const ONE_BILLION = 1000000000;
  const ONE_TRILLION = 1000000000000;
  const ONE_QUADRILLION = 1000000000000000;

  const suffix = {
    [HUNDRED]: ONE_HUNDRED,
    [THOUSAND]: ONE_THOUSAND,
    [MILLION]: ONE_MILLION,
    [BILLION]: ONE_BILLION,
    [TRILLION]: ONE_TRILLION,
    [QUADRILLION]: ONE_QUADRILLION,
  };

  let scale;
  if (numericalRepresentation < ONE_THOUSAND) {
    scale = HUNDRED;
  } else if (numericalRepresentation < ONE_MILLION) {
    scale = THOUSAND;
  } else if (numericalRepresentation < ONE_BILLION) {
    scale = MILLION;
  } else if (numericalRepresentation < ONE_TRILLION) {
    scale = BILLION;
  } else if (numericalRepresentation < ONE_QUADRILLION) {
    scale = TRILLION;
  } else {
    scale = QUADRILLION;
  }

  let valueInWords = `${convertIntegerValue(
    Math.floor(numericalRepresentation / suffix[scale])
  )} ${scale}`;
  const remainder = numericalRepresentation % suffix[scale];
  if (remainder > 0) {
    if (remainder < 100) {
      valueInWords += ` and ${convertIntegerValue(remainder)}`;
    } else {
      valueInWords += `, ${convertIntegerValue(remainder)}`;
    }
  }
  return valueInWords;
}

module.exports = convert;
