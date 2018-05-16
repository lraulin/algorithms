function ExOh(str) {
  let x = 0,
    o = 0;
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "x") {
      x++;
    } else if (str[i] == "o") {
      o++;
    }
  }
  return x == o;
}

const t0 = new Date().getTime();
for (let i = 0; i < 1000000; i++) {
  ExOh("xooox");
}
const t1 = new Date().getTime();
console.log((t1 - t0) / 1000 + " s");

console.log(ExOh("xoxoxo"));
console.log(ExOh("xxxoxo"));

// Coderbyte solution 1
function WordCount1(str) {
  // we split the string with the separator being
  // the x's and o's and compare them

  // this returns a string containing only o's
  var x = str.split("x").join("");

  // this returns a string containing only x's
  var o = str.split("o").join("");

  // see if their lengths are equal
  return x.length === o.length;
}

// Coderbyte solution 2
function WordCount2(str) {
  // split the string into an array
  var arr = str.split("");

  // create a new array of x's by using the filter function
  // which takes a test function with 3 parameters:
  // the element, its index, and the array it came from
  // and if the test passes it adds this element to the new array
  var x = arr.filter(function(elem, index, self) {
    return elem === "x";
  });

  // because we know the string can only contains x's and o's
  // we can subtract the length of our new array of x's from
  // arr and that will leave us with the number of o's
  var o = arr.length - x.length;

  // see if their lengths are equal
  return x.length === o;
}
