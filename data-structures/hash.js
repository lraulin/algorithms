"use strict";

const createNode = element => ({
  element,
  next: null
});

const createLinkedList = () => ({
  length: 0,
  head: null,
  append: function(element) {
    let node = createNode(element),
      current;
    if (this.head === null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.length++;
  },
  removeAt: function(position) {
    if (position > -1 && position < this.length) {
      let current = this.head,
        previous,
        index = 0;
      if (position === 0) {
        this.head = current.next;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        previous.next = current.next;
      }
      this.length--;
      return current.element;
    } else {
      return null;
    }
  },
  insert: function(position, element) {
    if (position >= 0 && position <= this.length) {
      let node = new Node(element),
        current = this.head,
        previous,
        index = 0;

      if (position === 0) {
        node.next = current;
        this.head = node;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        node.next = current;
        previous.next = node;
      }
      this.length++;
      return true;
    } else {
      return false;
    }
  },
  toString: function() {
    console.log("stringifying");
    let current = this.head,
      string = "";

    while (current) {
      console.log("still current...");
      string += current.element + (current.next ? "n" : "");
      current = current.next;
    }
    return string;
  },
  indexOf: function() {
    let current = this.head,
      index = -1;

    while (current) {
      if (element === current.elemente) {
        return index;
      }
      index++;
      current = current.next;
    }
    return -1;
  },
  remove: function(element) {
    let index = this.indexOf(element);
    return this.removeAt(index);
  },
  isEmpty: function() {
    return this.length === 0;
  },
  size: function() {
    return this.length;
  },
  getHead: function() {
    return this.head;
  }
});

console.log("**LINKED LIST**");
let list = createLinkedList();
list.append(15);
list.append(10);
console.log(list.size());
console.log(list.toString());

console.log("**END LINKED LIST END*");

const createDictionary = () => ({
  items: {},
  has: function(key) {
    return key in this.items;
  },
  set: function(key, value) {
    this.items[key] = value;
  },
  delete: function(key) {
    if (this.has(key)) {
      delete this.items[key];
      return true;
    }
    return false;
  },
  clear: function() {
    this.items = {};
  },
  size: function() {
    return Object.keys(this.items).length;
  },
  get: function(key) {
    return this.has(key) ? this.items[key] : undefined;
  },
  values: function() {
    const values = [];
    for (var k in this.items) {
      if (this.has(k)) {
        values.push(this.items[k]);
      }
    }
    return values;
  },
  keys: function() {
    return Object.keys(this.items);
  },
  getItems: function() {
    return this.items;
  }
});

const dictionary = createDictionary();
dictionary.set("Gandalf", "gandalf@email.com");
dictionary.set("John", "johnsnow@email.com");
dictionary.set("Tyrion", "tyrion@email.com");
console.log(dictionary.has("Gandalf"));
console.log(dictionary.size());
console.log(dictionary.values());
console.log(dictionary.get("Tyrion"));
dictionary.delete("John");
console.log("John deleted");
console.log(dictionary.keys());
console.log(dictionary.values());
console.log(dictionary.getItems());

// loose hash function
const createHashTable = () => ({
  table: [],
  // separate chaining...simplest but requires extra memory
  valuePair: function(key, value) {
    key = key;
    value = value;
    toString = function() {
      return "[" + this.key + " - " + this.value + "]";
    };
  },
  loseloseHashCode: function(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % 37;
  },
  put: function(key, value) {
    const position = this.loseloseHashCode(key);
    console.log(position + " = " + key);
    this.table[position] = createLinkedList();
  },
  get: function(key) {
    return this.table[this.loseloseHashCode(key)];
  },
  remove: function(key) {
    this.table[this.loseloseHashCode(key)] = undefined;
  },
  print: function() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i] !== undefined) {
        console.log(i + ": " + this.table[i]);
      }
    }
  }
});

const hash = createHashTable();
hash.put("Gandalf", "gandalf@email.com");
hash.put("John", "johnsnow@email.com");
hash.put("Tyrion", "tyrion@email.com");
hash.put("Aaron", "aaron@email.com");
hash.put("Donnie", "donnie@email.com");
hash.put("Ana", "ana@email.com");
hash.put("Jonathan", "jonathan@email.com");
hash.put("Jamie", "jamie@email.com");
hash.put("Sue", "sue@email.com");
hash.put("Mindy", "mindy@email.com");
hash.put("Paul", "paul@email.com");
hash.put("Nathan", "nathan@email.com");
console.log(hash.get("Gandalf"));
console.log(hash.get("Loiane"));
hash.remove("Gandalf");
console.log(hash.get("Gandalf"));
hash.print();
console.log(hash.get("CirceTheBitch"));

// My (first) attempt at a hash set.
const createHashArray = () => ({
  set: [],
  loseloseHashCode: function(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % 37;
  },
  put: function(key) {
    const position = loseloseHashCode(key);
    console.log(position + " = " + key);
    this.set[position] = key;
  },
  putArray: function(arr) {
    for (let i of arr) {
      this.put(i);
    }
  },
  get: function(key) {
    return this.set[loseloseHashCode(key)];
  },
  remove: function(key) {
    this.set[loseloseHashCode(key)] = undefined;
  },
  print: function() {
    for (let i = 0; i < set.length; i++) {
      if (set[i] !== undefined) {
        console.log(i + ": " + set[i]);
      }
    }
  }
});
