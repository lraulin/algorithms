"use strict";

function LinkedList() {
  let Node = function(element) {
    this.element = element;
    this.next = null;
  };

  let length = 0,
    head = null;

  this.append = function(element) {
    console.log("appending...");
    let node = new Node(element),
      current;

    if (head === null) {
      console.log("head is null...");
      head = node;
    } else {
      current = head;
      console.log("head is not null, current is head...");
      while (current.next) {
        console.log("current.next...");
        current = current.next;
      }
      console.log("current is not next");
      current.next = node;
      console.log("current.next = node");
    }
    length++;
    console.log("length = " + length);
  };

  this.removeAt = function(position) {
    if (position > -1 && position < length) {
      let current = head,
        previous,
        index = 0;

      if (position === 0) {
        head = current.next;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        previous.next = current.next;
      }
      length--;
      return current.element;
    } else {
      return null;
    }
  };

  this.insert = function(position, element) {
    if (position >= 0 && position <= length) {
      let node = new Node(element),
        current = head,
        previous,
        index = 0;

      if (position === 0) {
        node.next = current;
        head = node;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        node.next = current;
        previous.next = node;
      }
      length++;
      return true;
    } else {
      return false;
    }
  };

  this.toString = function() {
    console.log("stringifying");
    let current = head,
      string = "";

    while (current) {
      console.log("still current...");
      string += current.element + (current.next ? "n" : "");
      current = current.next;
    }
    return string;
  };

  this.indexOf = function() {
    let current = head,
      index = -1;

    while (current) {
      if (element === current.elemente) {
        return index;
      }
      index++;
      current = current.next;
    }
    return -1;
  };

  this.remove = function(element) {
    let index = this.indexOf(element);
    return this.removeAt(index);
  };

  this.isEmpty = function() {
    return length === 0;
  };

  this.size = function() {
    return length;
  };

  this.getHead = function() {
    return head;
  };
}
console.log("**LINKED LIST**");
let list = new LinkedList();
list.append(15);
list.append(10);
console.log(list.size());
console.log(list.toString());

console.log("**END LINKED LIST END*");

function Dictionary() {
  const items = {};

  this.has = function(key) {
    return key in items;
  };

  this.set = function(key, value) {
    items[key] = value;
  };

  this.delete = function(key) {
    if (this.has(key)) {
      delete items[key];
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

  this.get = function(key) {
    return this.has(key) ? items[key] : undefined;
  };

  this.values = function() {
    const values = [];
    for (var k in items) {
      if (this.has(k)) {
        values.push(items[k]);
      }
    }
    return values;
  };

  this.keys = function() {
    return Object.keys(items);
  };

  this.getItems = function() {
    return items;
  };
}

// var dictionary = new Dictionary();
// dictionary.set("Gandalf", "gandalf@email.com");
// dictionary.set("John", "johnsnow@email.com");
// dictionary.set("Tyrion", "tyrion@email.com");
// console.log(dictionary.has("Gandalf"));
// console.log(dictionary.size());
// console.log(dictionary.values());
// console.log(dictionary.get("Tyrion"));
// dictionary.delete("John");
// console.log("John deleted");
// console.log(dictionary.keys());
// console.log(dictionary.values());
// console.log(dictionary.getItems());

// loose hash function
function HashTable() {
  const table = [];

  // separate chaining...simplest but requires extra memory
  const ValuePair = function(key, value) {
    this.key = key;
    this.value = value;
    this.toString = function() {
      return "[" + this.key + " - " + this.value + "]";
    };
  };

  const loseloseHashCode = function(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % 37;
  };

  this.put = function(key, value) {
    const position = loseloseHashCode(key);
    console.log(position + " = " + key);
    table[position] = new LinkedList();
  };

  this.get = function(key) {
    return table[loseloseHashCode(key)];
  };

  this.remove = function(key) {
    table[loseloseHashCode(key)] = undefined;
  };

  this.print = function() {
    for (let i = 0; i < table.length; i++) {
      if (table[i] !== undefined) {
        console.log(i + ": " + table[i]);
      }
    }
  };
}

// const hash = new HashTable();
// hash.put("Gandalf", "gandalf@email.com");
// hash.put("John", "johnsnow@email.com");
// hash.put("Tyrion", "tyrion@email.com");
// hash.put("Aaron", "aaron@email.com");
// hash.put("Donnie", "donnie@email.com");
// hash.put("Ana", "ana@email.com");
// hash.put("Jonathan", "jonathan@email.com");
// hash.put("Jamie", "jamie@email.com");
// hash.put("Sue", "sue@email.com");
// hash.put("Mindy", "mindy@email.com");
// hash.put("Paul", "paul@email.com");
// hash.put("Nathan", "nathan@email.com");
// console.log(hash.get("Gandalf"));
// console.log(hash.get("Loiane"));
// hash.remove("Gandalf");
// console.log(hash.get("Gandalf"));
// hash.print();
// console.log(hash.get("CirceTheBitch"));

// My (first) attempt at a hash set.
function HashArray() {
  const set = [];

  const loseloseHashCode = function(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % 37;
  };

  this.put = function(key) {
    const position = loseloseHashCode(key);
    console.log(position + " = " + key);
    set[position] = key;
  };

  this.putArray = function(arr) {
    for (let i of arr) {
      this.put(i);
    }
  };

  this.get = function(key) {
    return set[loseloseHashCode(key)];
  };

  this.remove = function(key) {
    set[loseloseHashCode(key)] = undefined;
  };

  this.print = function() {
    for (let i = 0; i < set.length; i++) {
      if (set[i] !== undefined) {
        console.log(i + ": " + set[i]);
      }
    }
  };
}
