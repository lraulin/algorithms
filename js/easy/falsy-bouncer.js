function bouncer(arr) {
  return arr.filter(x => !!x);
}

console.log(bouncer([7, 'ate', '', false, 9]));
