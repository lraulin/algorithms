function confirmEnding(str, target) {
  return str.substr(-target.length, target.length) == target;
}

// ES2015
function confirmEnding2(str, target) {
  return str.endsWith(target);
}

console.log(confirmEnding2('Bastian', 'n'));
console.log(confirmEnding2('Open sesame', 'same'));
