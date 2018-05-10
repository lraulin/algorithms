function truncateString(str, num) {
  if (num < str.length) {
    if (num <= 3) return str.slice(0, num) + '...';
    else return str.slice(0, num - 3) + '...';
  } else return str;
}

// Shortened using ternary operator
function truncateString2(str, num) {
  if (str.length > num) return str.slice(0, num > 3 ? num - 3 : num) + '...';
  return str;
}
