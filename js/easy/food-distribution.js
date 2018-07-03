/**
 * Using the JavaScript language, have the function
 * FoodDistribution(arr) read the  array of numbers stored in arr which will
 * represent the hunger level of  different people ranging from 0 to 5 (0
 * meaning not hungry at all, 5 meaning  very hungry). You will also have N
 * sandwiches to give out which will range from  1 to 20. The format of the
 * array will be [N, h1, h2, h3, ...] where N  represents the number of
 * sandwiches you have and the rest of the array will  represent the hunger
 * levels of different people. Your goal is to minimize the  hunger difference
 * between each pair of people in the array using the sandwiches  you have
 * available.
 *
 * For example: if arr is [5, 3, 1, 2, 1], this means you  have 5
 * sandwiches to give out. You can distribute them in the following order  to
 * the people: 2, 0, 1, 0. Giving these sandwiches to the people their hunger
 * levels now become: [1, 1, 1, 1]. The difference between each pair of people
 * is  now 0, the total is also 0, so your program should return 0. Note: You
 * may not  have to give out all, or even any, of your sandwiches to produce a
 * minimized  difference.
 *
 * Another example: if arr is [4, 5, 2, 3, 1, 0] then
 * you can  distribute the sandwiches in the following order: [3, 0, 1, 0, 0]
 * which makes  all the hunger levels the following: [2, 2, 2, 1, 0]. The
 * differences between  each pair of people is now: 0, 0, 1, 1 and so your
 * program should return the  final minimized difference of 2.
 */

function totalDif(arr) {
  let dif = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] != arr[i + 1]) {
      dif += Math.max(arr[i], arr[i + 1]) - Math.min(arr[i], arr[i + 1]);
    }
  }
  return dif;
}

function maxDif(arr) {
  let dif = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    const thisdif = Math.max(arr[i], arr[i + 1]) - Math.min(arr[i], arr[i + 1]);
    if (thisdif > dif) dif = thisdif;
  }
  return dif;
}

function FoodDistribution(arr) {
  let sandwiches = arr[0];
  const hunger = arr.splice(1);
  while (sandwiches) {
    if (totalDif(hunger) === 0) {
      return 0;
    }
    for (let i = 0; i < hunger.length - 1; i++) {
      if (sandwiches === 0) break;
      const thesedifs = Math.abs(hunger[i] - hunger[i + 1]);
      const maxHunger = Math.max(...hunger);
      if (
        hunger[i] == maxHunger ||
        (hunger[i + 1] == maxHunger &&
          hunger[i] !== Math.min(...hunger) &&
          hunger[i + 1] !== Math.min(...hunger))
      ) {
        if (hunger[i] > hunger[i + 1]) {
          hunger[i] -= 1;
          sandwiches -= 1;
        } else {
          hunger[i + 1] -= 1;
          sandwiches -= 1;
        }
      }
    }
  }
  console.log(hunger);
  return totalDif(hunger);
}

test = [5, 3, 1, 2, 1];
console.log(FoodDistribution(test));

function FoodDistribution(arr) {
  var sandwiches = arr[0];
  var diff = 1;
  while (diff > 0 && sandwiches > 0) {
    for (let i = 2; i < arr.length; i++) {
      if (sandwiches > 0 && arr[i] > arr[i - 1]) {
        if (arr[i] - arr[i - 1] < sandwiches) {
          sandwiches -= arr[i] - arr[i - 1];
          arr[i] = arr[i - 1];
        } else {
          arr[i] -= sandwiches;
          sandwiches = 0;
        }
      }
    }

    for (let i = 2; i < arr.length; i++) {
      if (sandwiches > 0 && arr[i - 1] > arr[i]) {
        if (arr[i - 1] - arr[i] < sandwiches) {
          sandwiches -= arr[i - 1] - arr[i];
          arr[i - 1] = arr[i];
        } else {
          arr[i - 1] -= sandwiches;
          sandwiches = 0;
        }
      }
    }
    diff = 0;
    for (let i = 2; i < arr.length; i++) {
      diff += Math.abs(parseInt(arr[i] - arr[i - 1]));
    }
  }
  return diff;
}
