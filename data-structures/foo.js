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
