function Palindrome(str) {
  return (
    str
      .toLowerCase()
      .replace(/\W/g, "")
      .split("")
      .reverse()
      .join("") == str.replace(/\W/g, "").toLowerCase()
  );
}
