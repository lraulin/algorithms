"use strict";

const createNode = element => ({
  element,
  next: null,
});

const createLinkedList = () => ({
  length: 0,
  head: null,
  append(element) {
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
  removeAt(position) {
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
  insert(position, element) {
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
  toString() {
    let current = this.head,
      string = "";

    while (current) {
      string += current.element + (current.next ? "n" : "");
      current = current.next;
    }
    return string;
  },
  indexOf(element) {
    let current = this.head,
      index = -1;

    while (current) {
      if (element === current.element) {
        return index;
      }
      index++;
      current = current.next;
    }
    return -1;
  },
  remove(element) {
    let index = this.indexOf(element);
    return this.removeAt(index);
  },
  isEmpty() {
    return this.length === 0;
  },
  size() {
    return this.length;
  },
  getHead() {
    return this.head;
  },
});

// console.log("**LINKED LIST**");
// let list = createLinkedList();
// list.append(15);
// list.append(10);
// console.log(list.size());
// console.log(list.toString());

console.log("**END LINKED LIST END*");

const createDictionary = () => ({
  items: {},
  has(key) {
    return key in this.items;
  },
  set(key, value) {
    this.items[key] = value;
  },
  delete(key) {
    if (this.has(key)) {
      delete this.items[key];
      return true;
    }
    return false;
  },
  clear() {
    this.items = {};
  },
  size() {
    return Object.keys(this.items).length;
  },
  get(key) {
    return this.has(key) ? this.items[key] : undefined;
  },
  values() {
    const values = [];
    for (var k in this.items) {
      if (this.has(k)) {
        values.push(this.items[k]);
      }
    }
    return values;
  },
  keys() {
    return Object.keys(this.items);
  },
  getItems() {
    return this.items;
  },
});

// const dictionary = createDictionary();
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

const createValuePair = ({ key, value } = {}) => ({
  key,
  value,
  toString() {
    return "[" + this.key + " - " + this.value + "]";
  },
});

// Hash table with loose hash function and separate chaining for collision avoidance
const createHashTable = () => ({
  table: [],
  // separate chaining...simplest but requires extra memory
  hashCode(key) {
    return djb2HashCode(key);
  },
  put(key, value) {
    const position = this.hashCode(key);
    if (this.table[position] == undefined) {
      this.table[position] = createLinkedList();
    }
    console.log(position + " = " + key);
    this.table[position].append(createValuePair({ key, value }));
  },
  get(key) {
    const position = this.hashCode(key);
    if (this.table[position] !== undefined) {
      let current = this.table[position].getHead();
      while (current.next) {
        if (current.element.key === key) {
          return current.element.value;
        }
        current = current.next;
      }
      if (current.element.key === key) {
        return current.element.value;
      }
    }
    return undefined;
  },
  remove(key) {
    const position = this.hashCode(key);
    if (this.table[position] !== undefined) {
      let current = this.table[position].getHead();
      while (current.next) {
        if (current.element.key === key) {
          this.table[position].remove(current.element);
          if (this.table[position].isEmpty()) {
            this.table[position] = undefined;
          }
          return true;
        }
        current = current.next;
      }
      if (current.element.key === key) {
        this.table[position].remove(current.element);
        if (this.table[position].isEmpty()) {
          this.table[position] = undefined;
        }
        return true;
      }
    }
    return false;
  },
  print() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i] !== undefined) {
        console.log(i + ": " + this.table[i]);
      }
    }
  },
});

const hash = createHashTable();
hash.put("Gandalf", "gandalf@email.com");
hash.put("John", "johnsnow@email.com");
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
  hashCode(key) {
    return djb2HashCode(key);
  },
  put(key) {
    const position = this.hashCode(key);
    console.log(position + " = " + key);
    this.set[position] = key;
  },
  putArray(arr) {
    for (let i of arr) {
      this.put(i);
    }
  },
  get(key) {
    return this.set[hashCode(key)];
  },
  remove(key) {
    this.set[hashCode(key)] = undefined;
  },
  print() {
    for (let i = 0; i < set.length; i++) {
      if (set[i] !== undefined) {
        console.log(i + ": " + set[i]);
      }
    }
  },
});

function loseloseHashCode(key) {
  // Not a good hash code.
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash += key.charCodeAt(i);
  }
  return hash % 37;
}

function djb2HashCode(key) {
  // Simple hash code but better than lose lose.
  let hash = 5381;
  for (let i = 0; i < key.length; i++) {
    hash = hash * 33 + key.charCodeAt(i);
  }
  return hash % 1013;
}
