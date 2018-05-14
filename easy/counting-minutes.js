/**Using the JavaScript language, have the function CountingMinutesI(str) take the 
str parameter being passed which will be two times (each properly formatted 
with a colon and am or pm) separated by a hyphen and return the total number of 
minutes between the two times. The time will be in a 12 hour clock format. For 
example: if str is 9:00am-10:00am then the output should be 60. If str is 
1:00pm-11:00am the output should be 1320.   */

function CountingMinutesI(str) {
  str = str.split('-');
  str = str.map(e => {
    e = e.split(':');
    e[0] = Number(e[0]);
    if (e[1].charAt(2) == 'p' && e[0] != 12) e[0] += 12;
    if (e[1].charAt(2) == 'a' && e[0] == 12) e[0] = 0;
    e[1] = parseInt(e[1]);
    e = e[0] * 60 + e[1];
    return e;
  });
  const t1 = str[0];
  const t2 = str[0] > str[1] ? str[1] + 60 * 24 : str[1];
  return t2 - t1;
}

tests = [
  '12:30pm-12:00am',
  '1:00pm-11:00am',
  '2:08pm-2:00am',
  '11:00am-2:10pm',
  '3:00pm-4:45am'
];
for (test of tests) {
  console.log(CountingMinutesI(test));
}
