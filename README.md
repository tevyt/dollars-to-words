# dollars-to-words

A Javascript library for dollar values represented as numbers to words.

Example `175.75 => one hundred and seventy-five dollars and seventy-five cents`.

- Only positive values are accepted.
- Fractions of a cent will be ignored.
- Converts numbers up to the maximum safe Number value: `9007199254740992 (over 9 quadrillion)`

## Installation

`npm install dollars-to-words`

## Usage

```javascript
const dollarsToWords = require("dollars-to-words");

dollarsToWords(300); //"three hundred dollars and zero cents"
```
