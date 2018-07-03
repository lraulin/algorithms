/**
 * Challenge
 * Using the JavaScript language, have the function CoinDeterminer(num) take
 * the input, which will be an integer ranging from 1 to 250, and return an
 * integer output that will specify the least number of coins, that when added,
 * equal the input integer. Coins are based on a system as follows: there are
 * coins representing the integers 1, 5, 7, 9, and 11. So for example: if num
 * is 16, then the output should be 2 because you can achieve the number 16
 * with the coins 9 and 7. If num is 25, then the output should be 3 because
 * you can achieve 25 with either 11, 9, and 5 coins or with 9, 9, and 7 coins.
 * Sample Test Cases
 * Input:6
 *
 * Output:2
 *
 *
 * Input:16
 *
 * Output:2
 */

// Use largest first
function coinDeterminer(num) {
  const coins = {};
  coins["11"] = Math.floor(num / 11);
  num = num - coins["11"] * 11;
  coins["9"] = Math.floor(num / 9);
  num = num - coins["9"] * 9;
  coins["7"] = Math.floor(num / 7);
  num = num - coins["7"] * 7;
  coins["5"] = Math.floor(num / 5);
  num = num - coins["5"] * 5;
  coins["1"] = Math.floor(num / 1);
  num = num - coins["1"] * 1;
  if (coins["1"] >= 3) {
    coins["1"] -= 3;
    coins["11"]--;
    coins["9"]++;
    coins["5"]++;
  }
  console.log(coins);
  return coins["11"] + coins["9"] + coins["7"] + coins["5"] + coins["1"];
}

test = 37;
console.log(coinDeterminer(test));
