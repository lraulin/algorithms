// Implements same functions as E6 Set class
// Except: native set.values() returns iterator
// and set.size is a property, not a method
// Class doesn't have union, difference, intersection, etc methods

function Set() {
  let items = {};

  this.has = function(value) {
    return items.hasOwnProperty(value);
  };

  this.add = function(value) {
    if (!this.has(value)) {
      items[value] = value;
      return true;
    }
    return false;
  };

  this.delete = function(value) {
    if (this.has(value)) {
      delete items[value];
      return true;
    }
    return false;
  };

  this.clear = function() {
    items = {};
  };

  this.size = function() {
    return Object.keys(items).length;
  };

  this.sizeLegacy = function() {
    let count = 0;
    for (let key in items) {
      if (items.hasOwnProperty(key)) count++;
    }
    return count;
  };

  this.values = function() {
    let values = [];
    for (let i = 0, keys = Object.keys(items); i < keys.length; i++) {
      values.push(items[keys[i]]);
    }
    return values;
  };

  this.valuesLegacy = function() {
    let values = [];
    for (let key in items) {
      if (items.hasOwnProperty(key)) {
        values.push(items[key]);
      }
    }
    return values;
  };

  this.union = function(otherSet) {
    let unionSet = new Set();

    let values = this.values();
    for (let i = 0; i < values.length; i++) {
      unionSet.add(values[i]);
    }

    values = otherSet.values();
    for (let i = 0; i < values.length; i++) {
      unionSet.add(values[i]);
    }
    return unionSet;
  };

  this.intersection = function(otherSet) {
    let intersectionSet = new Set();
    let values = this.values();
    for (let i = 0; i < values.length; i++) {
      if (otherSet.has(values[i])) {
        intersectionSet.add(values[i]);
      }
    }
    return intersectionSet;
  };

  this.difference = function(otherSet) {
    let differenceSet = new Set();
    let values = this.values();
    for (let i = 0; i < values.length; i++) {
      if (!otherSet.has(values[i])) {
        differenceSet.add(values[i]);
      }
    }
    return differenceSet;
  };

  this.subset = function(otherSet) {
    if (this.size() > otherSet.size()) {
      return false;
    } else {
      let values = this.values();
      for (let i = 0; i < values.length; i++) {
        if (!otherSet.has(values[i])) {
          return false;
        }
      }
      return true;
    }
  };
}

let setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3);

let setB = new Set();
setB.add(2);
setB.add(3);
setB.add(4);

let setC = new Set();
setC.add(1);
setC.add(2);
setC.add(3);
setC.add(4);

let unionAB = setA.union(setB);
console.log("A\u222aB");
console.log(unionAB.values());

let intersectionAB = setA.intersection(setB);
console.log("A\u2229B");
console.log(intersectionAB.values());

let differenceAB = setA.difference(setB);
console.log("A\u2212B");
console.log(differenceAB.values());

let subsetAB = setA.subset(setB);
if (subsetAB) {
  console.log("A\u2286B");
} else {
  console.log("A\u2288B");
}

let subsetAC = setA.subset(setC);
if (subsetAC) {
  console.log("A\u2286C");
} else {
  console.log("A\u2288C");
}
