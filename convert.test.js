const convert = require("./index");

describe("integer values (n)", () => {
  test("n < 10", () => {
    expect(convert(0)).toEqual("zero dollars and zero cents");
    expect(convert(1)).toEqual("one dollars and zero cents");
    expect(convert(2)).toEqual("two dollars and zero cents");
    expect(convert(3)).toEqual("three dollars and zero cents");
    expect(convert(4)).toEqual("four dollars and zero cents");
    expect(convert(5)).toEqual("five dollars and zero cents");
    expect(convert(6)).toEqual("six dollars and zero cents");
    expect(convert(7)).toEqual("seven dollars and zero cents");
    expect(convert(8)).toEqual("eight dollars and zero cents");
    expect(convert(9)).toEqual("nine dollars and zero cents");
  });

  test("10 <= n < 20", () => {
    expect(convert(10)).toEqual("ten dollars and zero cents");
    expect(convert(11)).toEqual("eleven dollars and zero cents");
    expect(convert(12)).toEqual("twelve dollars and zero cents");
    expect(convert(13)).toEqual("thirteen dollars and zero cents");
    expect(convert(14)).toEqual("fourteen dollars and zero cents");
    expect(convert(15)).toEqual("fifteen dollars and zero cents");
    expect(convert(16)).toEqual("sixteen dollars and zero cents");
    expect(convert(17)).toEqual("seventeen dollars and zero cents");
    expect(convert(18)).toEqual("eighteen dollars and zero cents");
    expect(convert(19)).toEqual("nineteen dollars and zero cents");
  });

  test("10 < n < 100, when n is a multiple of 10", () => {
    expect(convert(20)).toEqual("twenty dollars and zero cents");
    expect(convert(30)).toEqual("thirty dollars and zero cents");
    expect(convert(40)).toEqual("fourty dollars and zero cents");
    expect(convert(50)).toEqual("fifty dollars and zero cents");
    expect(convert(60)).toEqual("sixty dollars and zero cents");
    expect(convert(70)).toEqual("seventy dollars and zero cents");
    expect(convert(80)).toEqual("eighty dollars and zero cents");
    expect(convert(90)).toEqual("ninety dollars and zero cents");
  });

  test("20 < n < 100", () => {
    expect(convert(73)).toEqual("seventy-three dollars and zero cents");
    expect(convert(54)).toEqual("fifty-four dollars and zero cents");
    expect(convert(86)).toEqual("eighty-six dollars and zero cents");
    expect(convert(31)).toEqual("thirty-one dollars and zero cents");
    expect(convert(35)).toEqual("thirty-five dollars and zero cents");
  });

  test("99 < n < 1,000 (hundred)", () => {
    expect(convert(101)).toEqual("one hundred and one dollars and zero cents");
    expect(convert(200)).toEqual("two hundred dollars and zero cents");
    expect(convert(449)).toEqual(
      "four hundred and fourty-nine dollars and zero cents"
    );
    expect(convert(428)).toEqual(
      "four hundred and twenty-eight dollars and zero cents"
    );
    expect(convert(220)).toEqual(
      "two hundred and twenty dollars and zero cents"
    );
    expect(convert(292)).toEqual(
      "two hundred and ninety-two dollars and zero cents"
    );
  });

  test("1,000 <= n <= 999,999 (thousand)", () => {
    expect(convert(1000)).toEqual("one thousand dollars and zero cents");
    expect(convert(5000)).toEqual("five thousand dollars and zero cents");
    expect(convert(180087)).toEqual(
      "one hundred and eighty thousand and eighty-seven dollars and zero cents"
    );
    expect(convert(54373)).toEqual(
      "fifty-four thousand, three hundred and seventy-three dollars and zero cents"
    );
    expect(convert(10000)).toEqual("ten thousand dollars and zero cents");
    expect(convert(100001)).toEqual(
      "one hundred thousand and one dollars and zero cents"
    );
    expect(convert(15300)).toEqual(
      "fifteen thousand, three hundred dollars and zero cents"
    );
  });

  test("1,000,000 <= n and n <= 999,999,999 (million)", () => {
    expect(convert(1836290)).toEqual(
      "one million, eight hundred and thirty-six thousand, two hundred and ninety dollars and zero cents"
    );
    expect(convert(6640447)).toEqual(
      "six million, six hundred and fourty thousand, four hundred and fourty-seven dollars and zero cents"
    );
    expect(convert(6117655)).toEqual(
      "six million, one hundred and seventeen thousand, six hundred and fifty-five dollars and zero cents"
    );
    expect(convert(8965452)).toEqual(
      "eight million, nine hundred and sixty-five thousand, four hundred and fifty-two dollars and zero cents"
    );
    expect(convert(4436182)).toEqual(
      "four million, four hundred and thirty-six thousand, one hundred and eighty-two dollars and zero cents"
    );
    expect(convert(408207396)).toEqual(
      "four hundred and eight million, two hundred and seven thousand, three hundred and ninety-six dollars and zero cents"
    );
    expect(convert(879791371)).toEqual(
      "eight hundred and seventy-nine million, seven hundred and ninety-one thousand, three hundred and seventy-one dollars and zero cents"
    );
  });

  test("1,000,000,000 <= n <= 999,999,999,999 (billion)", () => {
    expect(convert(178200000000)).toEqual(
      "one hundred and seventy-eight billion, two hundred million dollars and zero cents"
    );
    expect(convert(86300000000)).toEqual(
      "eighty-six billion, three hundred million dollars and zero cents"
    );
  });

  test("999,999,999,999 < n <= 999,999,999,999,999 (trillion)", () => {
    expect(convert(6000000000000)).toEqual(
      "six trillion dollars and zero cents"
    );
    expect(convert(6020001004303)).toEqual(
      "six trillion, twenty billion, one million, four thousand, three hundred and three dollars and zero cents"
    );
  });

  test(`999,999,999,999,999 < n <= ${Number.MAX_SAFE_INTEGER} (quadrillion)`, () => {
    expect(convert(8230124567090203)).toEqual(
      "eight quadrillion, two hundred and thirty trillion, one hundred and twenty-four billion, five hundred and sixty-seven million, ninety thousand, two hundred and three dollars and zero cents"
    );
  });
});
