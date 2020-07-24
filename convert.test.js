const convert = require("./index");

test("integer values less than 10", () => {
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

test("integer values greater than 11 and less than 20", () => {
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

test("multiples of 10 greater than 10 and less than 100", () => {
  expect(convert(20)).toEqual("twenty");
  expect(convert(30)).toEqual("thirty");
  expect(convert(40)).toEqual("fourty");
  expect(convert(50)).toEqual("fifty");
  expect(convert(60)).toEqual("sixty");
  expect(convert(70)).toEqual("seventy");
  expect(convert(80)).toEqual("eighty");
  expect(convert(90)).toEqual("ninety");
});
