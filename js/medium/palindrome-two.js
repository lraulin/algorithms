function PalindromeTwo(str) {
  str = str.replace(/[\W_]/g, "").toLowerCase();
  return (
    str ==
    str
      .split("")
      .reverse()
      .join("")
  );
}

console.log(PalindromeTwo("Noel - sees Leon"));
