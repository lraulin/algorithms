/**
 * Using the JavaScript language, have the function Calculator(str) take
 * the str parameter being passed and evaluate the mathematical expression
 * within in. For example, if str were "2+(3-1)*3" the output should be 8.
 * Another example: if str were "(2-0)(6/2)" the output should be 6. There can
 * be parenthesis within the string so you must evaluate it properly according
 * to the rules of arithmetic. The string will contain the operators: +, -, /,
 * *, (, and ). If you have a string like this: #/#*# or #+#(#)/#, then
 * evaluate from left to right. So divide then multiply, and for the second one
 * multiply, divide, then add. The evaluations will be such that there will not
 * be any decimal operations, so you do not need to account for rounding and
 * whatnot.   Hard challenges are worth 15 points and you are not timed for
 * them. Sample Test Cases Input:"6*(4/2)+3*1"  Output:"15"   Input:"6/3-1"
 * Output:"1"
 */

// Approach: Convert from infix to postfix with Djikstra's shunting yard algorithm
// Then...do the math

function add(a, b) {
  return parseInt(a) + parseInt(b);
}

function subtract(a, b) {
  return parseInt(a) - parseInt(b);
}

function multiply(a, b) {
  return parseInt(a) * parseInt(b);
}

function divide(a, b) {
  return parseInt(a) / parseInt(b);
}

Array.prototype.top = function() {
  return this[this.length - 1];
};

function comparePrecedence(a, b) {
  // return true if precidence of a is higher than b
  const dict = {
    '*': 3,
    '/': 3,
    '+': 2,
    '-': 2
  };
  return dict[a] - dict[b];
}

function djikstrasShuntingYard(str) {
  // Converted from pseudocode at
  // https://en.wikipedia.org/wiki/Shunting-yard_algorithm
  const outputQueue = [];
  const operatorStack = [];
  const rxNum = /^[0-9]+/g;
  const rxOp = /^[\/\+\-\*]/g;
  // while there are tokens to be read
  while (str.length) {
    // read a token
    let token;
    // if token is a number
    if (rxNum.test(str)) {
      const index = rxNum.lastIndex;
      token = str.slice(0, index);
      str = str.slice(index);
      // push number token to output queue
      outputQueue.push(token);
      // if token is an operator
    } else if (rxOp.test(str)) {
      // while there is an operator at the top of the stack with greater precidence
      while (
        comparePrecedence(operatorStack.top()) >= 0 &&
        operatorStack.top() !== '('
      ) {
        // pop operators from the operator stack onto the output queue
        outputQueue.push(operatorStack.pop());
      }
      // push token onto the operator stack
      operatorStack.push(str[0]);
      str = str.slice(1);
      // if token is a left bracket
    } else if (str[0] === '(') {
      // push it onto the operator stack
      operatorStack.push(str[0]);
      str = str.slice(1);
      // if token is a right bracket
    } else if (str[0] === ')') {
      str = str.slice(1);
      // while operator at top of operator stack is not a left bracket
      while (operatorStack.top() !== '(') {
        // pop the operator from the operator stack onto the output queue
        outputQueue.push(operatorStack.pop());
      }
      // pop the left bracket from the stack
      if (operatorStack.top() === '(') {
        operatorStack.pop();
      } else {
        return 'Error: Mismatched parentheses';
      }
    }
  }
  // once there are no more tokens to read:
  // while there are still operators on the stack:
  while (operatorStack.length) {
    if (operatorStack.top() === '(' || operatorStack.top() === ')') {
      return 'Error: Mismatched parentheses';
    } else {
      // pop the operator from the stack onto the output queue
      outputQueue.push(operatorStack.pop());
    }
  }
  return outputQueue;
}

function evaluate(a, b, op) {
  a = Number(a);
  b = Number(b);
  if (op === '/') {
    return a / b;
  } else if (op === '*') {
    return a * b;
  } else if (op === '+') {
    return a + b;
  } else if (op === '-') {
    return a - b;
  } else {
    console.log('Invalid operator');
    return undefined;
  }
}

function Calculator(str) {
  // turn infix string into postfix array
  const queue = djikstrasShuntingYard(str);
  console.log(queue.join(' '));
  const stack = [];
  const rxOp = /^[\/\+\-\*]/g;
  queue.forEach(function(token) {
    console.log(token);
    if (rxOp.test(token)) {
      operand1 = stack.pop();
      operand2 = stack.pop();
      let result = evaluate(operand2, operand1, token);
      console.log(`${operand2} ${token} ${operand1} = ${result}`);
      stack.push(result);
    } else {
      stack.push(Number(token));
    }
  });
  console.log(stack);
  if (stack.length !== 1) {
    return 'Error evaluating expression';
  } else {
    return stack.pop();
  }
}

// const test = '6*(4/2)+3*1';
const test = '6/3-1';
console.log(Calculator(test));
