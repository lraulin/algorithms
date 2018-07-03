/**
 * Challenge
 * Using the JavaScript language, have the function CountingMinutes(str) take
 * the str parameter being passed which will be two times (each properly
 * formatted with a colon and am or pm) separated by a hyphen and return the
 * total number of minutes between the two times. The time will be in a 12 hour
 * clock format. For example: if str is 9:00am-10:00am then the output should
 * be 60. If str is 1:00pm-11:00am the output should be 1320.
 * Sample Test Cases
 * Input:"12:30pm-12:00am"
 *
 * Output:690
 *
 *
 * Input:"1:23am-1:08am"
 *
 * Output:1425
 *
 * Hint
 * You'll first need to determine the difference in hours and minutes between
 * the two times (converting the times into a 24-hour format might help as
 * well) and then you can convert the hours into minutes to get a final answer
 * in minutes.
 */

function countingMinutes(str) {
  const arr = str.split("-");
  arr[0] = arr[0].split(":");
  arr[1] = arr[1].split(":");
  let t1 = parseInt(arr[0][1]);
  if (parseInt(arr[0][0]) !== 12) {
    if (arr[0][1][arr[0][1].length - 2] == "p") {
      t1 += parseInt(arr[0][0]) * 60 + 12 * 60;
    } else {
      t1 += parseInt(arr[0][0]) * 60;
    }
  } else {
    if (arr[0][1][arr[0][1].length - 2] == "p") {
      t1 += 12 * 60;
    }
  }
  let t2 = parseInt(arr[1][1]);
  if (parseInt(arr[1][0]) !== 12) {
    if (arr[1][1][arr[1][1].length - 2] == "p") {
      t2 += parseInt(arr[1][0]) * 60 + 12 * 60;
    } else {
      t2 += parseInt(arr[1][0]) * 60;
    }
  } else {
    if (arr[1][1][arr[1][1].length - 2] == "p") {
      t2 += 12 * 60;
    }
  }

  if (t1 > t2) {
    t2 += 60 * 24;
  }
  return t2 - t1;
}

// test = "12:30pm-12:00am";
// test = "1:23am-1:08am";
test = "1:00pm-11:00am";
console.log(countingMinutes(test));
