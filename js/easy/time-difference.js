/**
 * Challenge
 * Using the JavaScript language, have the function TimeDifference(strArr) read
 * the array of strings stored in strArr which will be an unsorted list of
 * times in a twelve-hour format like so: HH:MM(am/pm). Your goal is to
 * determine the smallest difference in minutes between two of the times in the
 * list. For example: if strArr is ["2:10pm", "1:30pm", "10:30am", "4:42pm"]
 * then your program should return 40 because the smallest difference is
 * between 1:30pm and 2:10pm with a difference of 40 minutes. The input array
 * will always contain at least two elements and all of the elements will be in
 * the correct format and unique.
 * Sample Test Cases
 * Input:"1:10pm", "4:40am", "5:00pm"
 *
 * Output:230
 *
 *
 * Input:"10:00am", "11:45pm", "5:00am", "12:01am"
 *
 * Output:16
 *
 * Hint
 * Try first sorting the array of times. Then you can loop through the array
 * and search for the smallest difference between each two times.
 */

function TimeDifference(strArr) {
  const toMinutes = str => {
    const pm = str[str.length - 2] === "p" ? true : false;
    str = str.split(":");
    let h = Number(str[0]);
    if (h === 12) h = 0;
    const m = parseInt(str[1]);
    let t = m + h * 60;
    if (pm) t += 12 * 60;
    return t;
  };
  time = strArr.map(x => toMinutes(x));
  time = time.sort((a, b) => a - b);
  let smallestDif;
  for (let i = 1; i < time.length; i++) {
    if (time[i] - time[i - 1] < smallestDif || smallestDif === undefined) {
      smallestDif = time[i] - time[i - 1];
    }
  }
  if (
    time[0] < 720 &&
    time[time.length - 1] > 720 &&
    1440 - time[time.length - 1] + time[0] < smallestDif
  ) {
    smallestDif = 1440 - time[time.length - 1] + time[0];
  }
  return smallestDif;
}

test = ["10:00am", "11:45pm", "5:00am", "12:01am"];
console.log(TimeDifference(test));
