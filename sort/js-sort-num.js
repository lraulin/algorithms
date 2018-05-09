arr = [
  20,
  28,
  40,
  46,
  19,
  3,
  14,
  43,
  9,
  47,
  49,
  23,
  0,
  27,
  8,
  13,
  44,
  26,
  29,
  21,
  18,
  12,
  17,
  7,
  48,
];

console.log(arr.sort(arr));

function sortNumerically(arr) {
  return arr.sort((x, y) => x - y);
}

console.log(sortNumerically(arr));
