const convert = require("./index");

test("integer values less than 10", () => {
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
