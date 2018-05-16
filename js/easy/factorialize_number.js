function factorialize(num) {
  if (num > 1) {
    let i = 1;
    let total = 1;
    while (i <= num) {
      total *= i;
      i++;
    }
    return total;
  } else {
    return 1;
  }
}
