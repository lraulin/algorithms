/**
 * Challenge Using the JavaScript language, have the function
 * ScaleBalancing(strArr) read strArr which will contain two elements, the
 * first being the two positive integer weights on a balance scale (left and
 * right sides) and the second element being a list of available weights as
 * positive integers. Your goal is to determine if you can balance the scale by
 * using the least amount of weights from the list, but using at most only 2
 * weights. For example: if strArr is ["[5, 9]", "[1, 2, 6, 7]"] then this
 * means there is a balance scale with a weight of 5 on the left side and 9 on
 * the right side. It is in fact possible to balance this scale by adding a 6
 * to the left side from the list of weights and adding a 2 to the right side.
 * Both scales will now equal 11 and they are perfectly balanced. Your program
 * should return a comma separated string of the weights that were used from
 * the list in ascending order, so for this example your program should return
 * the string 2,6
 *
 * There will only ever be one unique solution and the list of available
 * weights will not be empty. It is also possible to add two weights to only
 * one side of the scale to balance it. If it is not possible to balance the
 * scale then your program should return the string not possible.
 *
 * Sample Test Cases
 * Input:"[3, 4]", "[1, 2, 7, 7]"
 * Output:"1"
 * Input:"[13, 4]", "[1, 2, 3, 6, 14]"
 * Output:"3,6"
 */

function ScaleBalancing(strArr) {
  // parse input
  strArr = strArr.map(x => x.replace("[", ""));
  strArr = strArr.map(x => x.replace("]", ""));
  strArr = strArr.map(x => x.split(","));
  strArr = strArr.map(x => x.map(y => parseInt(y)));
  const scale = strArr[0];
  const weights = strArr[1];
  const heavier = scale[0] > scale[1] ? scale[0] : scale[1];
  const lighter = scale[0] < scale[1] ? scale[0] : scale[1];
  // check if it can be done with one weight
  for (let i = 0; i < weights.length; i++) {
    if (lighter + weights[i] === heavier) {
      return weights[i].toString();
    }
  }
  // check if it can be done by adding two weights to the smaller side
  for (let i = 0; i < weights.length - 1; i++) {
    for (let j = i + 1; j < weights.length - 1; j++) {
      if (lighter + weights[i] + weights[j] === heavier) {
        return "" + weights[i] + "," + weights[j];
      }
    }
  }
  // check if it can be done by adding one weight to each side
  // On^2...could probably be optimized by eliminating redundancy.
  for (let i = 0; i < weights.length; i++) {
    for (let j = 0; j < weights.length; j++) {
      if (i != j && weights[i] + lighter === weights[j] + heavier) {
        if (weights[i] < weights[j]) {
          return "" + weights[i] + "," + weights[j];
        } else {
          return "" + weights[j] + "," + weights[i];
        }
      }
    }
  }
  return "not possible";
}

// test = ["[5, 9]", "[1, 2, 6, 7]"];
// test = ["[3, 4]", "[1, 2, 7, 7]"];
test = ["[13, 4]", "[1, 2, 3, 6, 14]"];
console.log(ScaleBalancing(test));
