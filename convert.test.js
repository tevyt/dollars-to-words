const convert = require("./index");

describe("integer values (n)", () => {
  test("n < 10", () => {
    expect(convert(0)).toEqual("zero");
    expect(convert(1)).toEqual("one");
    expect(convert(2)).toEqual("two");
    expect(convert(3)).toEqual("three");
    expect(convert(4)).toEqual("four");
    expect(convert(5)).toEqual("five");
    expect(convert(6)).toEqual("six");
    expect(convert(7)).toEqual("seven");
    expect(convert(8)).toEqual("eight");
    expect(convert(9)).toEqual("nine");
  });

  test("10 <= n < 20", () => {
    expect(convert(10)).toEqual("ten");
    expect(convert(11)).toEqual("eleven");
    expect(convert(12)).toEqual("twelve");
    expect(convert(13)).toEqual("thirteen");
    expect(convert(14)).toEqual("fourteen");
    expect(convert(15)).toEqual("fifteen");
    expect(convert(16)).toEqual("sixteen");
    expect(convert(17)).toEqual("seventeen");
    expect(convert(18)).toEqual("eighteen");
    expect(convert(19)).toEqual("nineteen");
  });

  test("10 < n < 100, when n is a multiple of 10", () => {
    expect(convert(20)).toEqual("twenty");
    expect(convert(30)).toEqual("thirty");
    expect(convert(40)).toEqual("fourty");
    expect(convert(50)).toEqual("fifty");
    expect(convert(60)).toEqual("sixty");
    expect(convert(70)).toEqual("seventy");
    expect(convert(80)).toEqual("eighty");
    expect(convert(90)).toEqual("ninety");
  });

  test("20 < n < 100", () => {
    expect(convert(73)).toEqual("seventy-three");
    expect(convert(54)).toEqual("fifty-four");
    expect(convert(86)).toEqual("eighty-six");
    expect(convert(31)).toEqual("thirty-one");
    expect(convert(35)).toEqual("thirty-five");
  });

  test("99 < n < 1,000 (hundred)", () => {
    expect(convert(101)).toEqual("one hundred and one");
    expect(convert(200)).toEqual("two hundred");
    expect(convert(449)).toEqual("four hundred and fourty-nine");
    expect(convert(428)).toEqual("four hundred and twenty-eight");
    expect(convert(220)).toEqual("two hundred and twenty");
    expect(convert(292)).toEqual("two hundred and ninety-two");
  });

  test("1,000 <= n <= 999,999 (thousand)", () => {
    expect(convert(1000)).toEqual("one thousand");
    expect(convert(5000)).toEqual("five thousand");
    expect(convert(180087)).toEqual(
      "one hundred and eighty thousand and eighty-seven"
    );
    expect(convert(54373)).toEqual(
      "fifty-four thousand, three hundred and seventy-three"
    );
    expect(convert(10000)).toEqual("ten thousand");
    expect(convert(100001)).toEqual("one hundred thousand and one");
    expect(convert(15300)).toEqual("fifteen thousand, three hundred");
  });

  test("1,000,000 <= n and n <= 999,999,999 (million)", () => {
    expect(convert(1836290)).toEqual(
      "one million, eight hundred and thirty-six thousand, two hundred and ninety"
    );
    expect(convert(6640447)).toEqual(
      "six million, six hundred and fourty thousand, four hundred and fourty-seven"
    );
    expect(convert(6117655)).toEqual(
      "six million, one hundred and seventeen thousand, six hundred and fifty-five"
    );
    expect(convert(8965452)).toEqual(
      "eight million, nine hundred and sixty-five thousand, four hundred and fifty-two"
    );
    expect(convert(4436182)).toEqual(
      "four million, four hundred and thirty-six thousand, one hundred and eighty-two"
    );
    expect(convert(408207396)).toEqual(
      "four hundred and eight million, two hundred and seven thousand, three hundred and ninety-six"
    );
    expect(convert(879791371)).toEqual(
      "eight hundred and seventy-nine million, seven hundred and ninety-one thousand, three hundred and seventy-one"
    );
  });

  test("1,000,000,000 <= n <= 999,999,999,999 (billion)", () => {
    expect(convert(178200000000)).toEqual(
      "one hundred and seventy-eight billion, two hundred million"
    );
    expect(convert(86300000000)).toEqual(
      "eighty-six billion, three hundred million"
    );
  });

  test("999,999,999,999 <= n <= 999,999,999,999,999 (trillion)", () => {
    expect(convert(6000000000000)).toEqual("six trillion");
    expect(convert(6020001004303)).toEqual(
      "six trillion, twenty billion, one million, four thousand, three hundred and three"
    );
  });
});
