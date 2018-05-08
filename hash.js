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

var dictionary = new Dictionary();
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
function HashTable() {
  const table = [];

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
    table[position] = value;
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

const hash = new HashTable();
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
