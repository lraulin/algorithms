const stampit = require("../node_modules/stampit/src/stampit");

const Queue = stampit({
  // from http://code.iamkate.com/javascript/queues/
  // converted into a stamp
  init() {
    var queue = [];
    var offset = 0;

    this.getLength = function() {
      return queue.length - offset;
    };

    this.isEmpty = function() {
      return queue.length == 0;
    };

    this.enqueue = function(item) {
      queue.push(item);
    };

    this.dequeue = function() {
      if (queue.length == 0) return undefined;
      var item = queue[offset];

      if (++offset * 2 >= queue.length) {
        queue = queue.slice(offset);
        offset = 0;
      }

      return item;
    };

    this.peek = function() {
      return queue.length > 0 ? queue[offset] : undefined;
    };

    this.toString = function() {
      return queue.slice(offset).toString();
    };
  },
});

const queue = Queue();
queue.enqueue("A");
queue.enqueue("B");
queue.enqueue("C");
queue.enqueue("D");
queue.dequeue();
const q = queue.toString();
console.log(q);
