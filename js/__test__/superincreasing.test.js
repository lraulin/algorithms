const each = require("jest-each");

describe("method superincreasing", () => {
  let result;
  Superincreasing = require("../easy/superincreasing.js");
  each([[[1, 2, 4, 8, 17, 36, 70], "true"], [[4, 10, 11, 100], "false"]]).test(
    "returns true if every number is greater than the sum of all" +
      "preceding numbers",
    (expected, arr) => {
      expect(Superincreasing(arr)).toBe(expected);
    },
  );
});
