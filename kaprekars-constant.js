function ascend(num) {
  return Number(
    num
      .toString()
      .split("")
      .sort()
      .join(""),
  );
}

function descend(num) {
  if (num < 10) {
    num = "000" + num;
  } else if (num < 100) {
    num = "00" + num;
  } else if (num < 1000) {
    num = "0" + num;
  } else {
    num = "" + num;
  }
  return Number(
    num
      //.toString()
      //.padStart(4, "0")  // Available in ES6
      .split("")
      .sort()
      .reverse()
      .join(""),
  );
}

function kaprekarsConstant(num) {
  let count = 0;
  while (num != 6174) {
    if (count > 10) {
      throw new RangeError("Count > 50. Too long!");
    }
    console.log(
      descend(num) + " - " + ascend(num) + " = " + (descend(num) - ascend(num)),
    );
    num = descend(num) - ascend(num);
    count++;
  }
  console.log(count);
  return num;
}

kaprekarsConstant(3524);
