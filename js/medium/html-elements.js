/**
 * Challenge
 * Using the JavaScript language, have the function HTMLElements(str) read the
 * str parameter being passed which will be a string of HTML DOM elements and
 * plain text. The elements that will be used are: b, i, em, div, p. For
 * example: if str is "<div><b><p>hello world</p></b></div>" then this string
 * of DOM elements is nested correctly so your program should return the string
 * true.
 *
 * If a string is not nested correctly, return the first element encountered
 * where, if changed into a different element, would result in a properly
 * formatted string. If the string is not formatted properly, then it will only
 * be one element that needs to be changed. For example: if str is
 * "<div><i>hello</i>world</b>" then your program should return the string div
 * because if the first <div> element were changed into a <b>, the string would
 * be properly formatted.
 * Sample Test Cases
 * Input:"<div><div><b></b></div></p>"
 *
 * Output:"div"
 *
 * Input:"<div>abc</div><p><em><i>test test test</b></em></p>"
 *
 * Output:"i"
 */

function htmlElements(str) {
  // container for current element
  let el = "";
  // flag to decide whether current char should be appended to current element
  let recording = false;
  // stack of open element names without angle brackets
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "<") {
      // we've encountered a <, so everything after until > is an element
      recording = true;
      continue;
    }
    if (str[i] === ">") {
      // we're at the end of the element, so decide if it's an opening or
      // closing element, and push to or pop the stack accordingly
      recording = false;
      if (el[0] === "/") {
        // tag is closing tag: check if it matches last opening tag
        if (stack[stack.length - 1] === el.slice(1)) {
          // open tag has been closed, so pop the stack
          stack.pop();
        } else {
          // closing tag doesn't match open, so previous tag is first invalid
          return stack[stack.length - 1];
        }
      } else {
        // tag is opening tag; add it to the stack
        stack.push(el);
      }
      // reset el for next element
      el = "";
    }
    if (recording) {
      el += str[i];
    }
  }
  // if stack isn't empty, not all of our tags were closed
  if (stack.length) {
    return stack[0];
  }
  return "true";
}

// const test = "<div><b><p>hello world</p></b></div>";
// output: 'true'
// const test = "<div><i>hello</i>world</b>";
// output: 'div'
// const test = "<div><div><b></b></div></p>";
// output: 'div'
// const test = "<div>abc</div><p><em><i>test test test</b></em></p>";
// output: 'i'
const test = "<section><div><p><em><i>test</i></em></p></div>";
// output: 'section
console.log(htmlElements(test));
