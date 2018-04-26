function mutation(arr) {
  const first = arr[0].toUpperCase();
  const second = arr[1].toUpperCase();
  for (let i = 0; i < second.length; i++) {
    if (first.indexOf(second.charAt(i)) == -1) {
      return false;
    }
  }
  return true;
}

console.log(mutation(["hello", "hey"])); // false
console.log(mutation(["hello", "Hello"])); // true
console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])); // true
console.log(mutation(["Mary", "Army"])); // true
