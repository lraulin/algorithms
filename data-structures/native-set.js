let setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3);

console.log("Set A: " + [...setA]);

let setB = new Set();
setB.add(2);
setB.add(3);
setB.add(4);

console.log("Set B: " + [...setB]);

function union(setA, setB) {
  let unionSet = new Set();
  for (let x of setA) {
    unionSet.add(x);
  }
  for (let x of setB) {
    unionSet.add(x);
  }
  return unionSet;
}

let unionAB = union(setA, setB);

/**
 * Find intersection
 */

let intersection = function(setA, setB) {
  let intersectionSet = new Set();
  for (let x of setA) {
    if (setB.has(x)) {
      intersectionSet.add(x);
    }
  }
  return intersectionSet;
};

let intersectionAB = intersection(setA, setB);

// OMG JS has list comprehensions in ES7!!!
// Crap, nevermind... Been dropped.
// Use map and/or filter instead.

// let intersectionAb = new Set([x for (x of setA) if (setB.has(x))]);

/** INTERSECTION */
let intersectionAbSet = new Set([...setA].filter(x => setB.has(x)));
console.log("A\u2229B: " + [...intersectionAbSet]);

/** DIFFERENCE */
let differenceSet = new Set([...setA].filter(x => !setB.has(x)));
console.log("A\u2212B: " + [...differenceSet]);

/** UNION */
let unionSet = new Set([...setA, ...setB]);
console.log("A\u222aB: " + [...unionSet]);

/** SUBSET */
let isSubset = [...setA].every(x => [...setB].indexOf(x) === -1);
console.log("A is subset of B: " + isSubset);

console.log(setA.entries());
// [Set Iterator] { [ 1, 1 ], [ 2, 2 ], [ 3, 3 ] }
console.log(setA.values());
// [Set Iterator] { 1, 2, 3 }

// Destructuring would seem to be best if you want to use array methods.
