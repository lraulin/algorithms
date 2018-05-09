// Probably doesn't matter for a set this small, but indexOf in O(n),
// whereas my approach does it in O(1). I think the algorithm is still
// O(n) either way, though.

function VowelCount(str) {
  const vowels = {
    a: true,
    e: true,
    i: true,
    o: true,
    u: true,
  };
  count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels[str[i]]) {
      count++;
    }
  }
  return count;
}

console.log(VowelCount("hello"));
console.log(VowelCount("coderbyte"));

// Coderbyte solution
function VowelCount(str) {
  // convert the string to all lowercase characters
  var str = str.toLowerCase();

  // possible vowels
  var vowels = ["a", "e", "i", "o", "u"];

  // where we store our vowel count
  var count = 0;

  // loop through string checking each character
  for (var i = 0; i < str.length; i++) {
    // if this character is found in vowels array
    // then the character is a vowel and we add 1 to count
    if (vowels.indexOf(str[i]) !== -1) {
      count = count + 1;
    }
  }

  // return the number of vowels found
  return count;
}

VowelCount("All cows eat grass");
