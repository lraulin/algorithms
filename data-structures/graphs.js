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

const Graph = stampit({
  init() {
    const vertices = [];
    const adjacencyList = new Map();

    /** Returns array for search operations
     *     white = unvisited
     *     grey = discovered
     *     black = explored
     */
    const initializeColor = function() {
      const color = [];
      for (let i = 0; i < vertices.length; i++) {
        color[vertices[i]] = "white";
      }
      return color;
    };

    this.addVertex = function(vertex) {
      vertices.push(vertex);
      adjacencyList.set(vertex, []);
    };

    this.addEdge = function(vertex, otherVertex) {
      adjacencyList.get(vertex).push(otherVertex);
      adjacencyList.get(otherVertex).push(vertex);
    };

    this.getVertices = function() {
      console.log(vertices);
    };

    // Breadth-first search
    this.bfs = function(vertexV) {
      const color = initializeColor();
      const queue = Queue();
      const depth = [];
      const predecessors = [];
      queue.enqueue(vertexV);

      for (let i = 0; i < vertices.length; i++) {
        depth[vertices[i]] = 0;
        predecessors[vertices[i]] = 0;
      }

      while (!queue.isEmpty()) {
        const vertexU = queue.dequeue();
        const neighbors = adjacencyList.get(vertexU);
        color[vertexU] = "grey";
        for (let i = 0; i < neighbors.length; i++) {
          const vertexW = neighbors[i];
          if (color[vertexW] === "white") {
            color[vertexW] = "grey";
            depth[vertexW] = depth[vertexU] + 1;
            predecessors[vertexW] = vertexU;
            queue.enqueue(vertexW);
          }
        }
        color[vertexU] = "black";
      }
      return {
        depth,
        predecessors,
      };
    };

    // Depth-first search
    let time = 0; // needed for both dfs and dfsVisit
    this.dfs = function(callback) {
      const color = initializeColor();
      const discoveryTime = [];
      const finishTime = [];
      const predecessors = [];
      time = 0;

      for (let i = 0; i < vertices.length; i++) {
        discoveryTime[vertices[i]] = 0;
        finishTime[vertices[i]] = 0;
        predecessors[vertices[i]] = null;
      }

      for (let i = 0; i < vertices.length; i++) {
        if (color[vertices[i]] === "white") {
          dfsVisit(
            vertices[i],
            color,
            callback,
            discoveryTime,
            finishTime,
            predecessors,
          );
        }
      }

      return {
        discoveryTime,
        finishTime,
        predecessors,
      };
    };

    const dfsVisit = function(
      vertexU,
      color,
      discoveryTime,
      finishTime,
      predecessors,
    ) {
      console.log("discovered " + vertexU);
      color[vertexU] = "grey";
      discoveryTime[vertexU] = time++;
      const neighbors = adjacencyList.get(vertexU);

      for (let i = 0; i < neighbors.length; i++) {
        const vertexW = neighbors[i];
        if (color[vertexW] === "white") {
          predecessors[vertexW] = vertexU;
          dfsVisit(vertexW, color, discoveryTime, finishTime, predecessors);
        }
      }
      color[vertexU] = "black";
      finishTime[vertexU] = time++;
      console.log("explored " + vertexU);
    };

    this.toString = function() {
      let str = "";
      for (let i = 0; i < vertices.length; i++) {
        str += vertices[i] + " --> ";
        let neighbors = adjacencyList.get(vertices[i]);
        for (let j = 0; j < neighbors.length; j++) {
          str += neighbors[j] + " ";
        }
        str += "\n";
      }
      return str;
    };
  },
});

const graph = Graph();
const myVertices = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
for (let i = 0; i < myVertices.length; i++) {
  graph.addVertex(myVertices[i]);
}
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("A", "D");
graph.addEdge("C", "D");
graph.addEdge("C", "G");
graph.addEdge("D", "G");
graph.addEdge("D", "H");
graph.addEdge("B", "E");
graph.addEdge("B", "F");
graph.addEdge("E", "I");
console.log(graph.toString());

function printNode(value) {
  console.log("Visited Vertex: " + value);
}
console.log(graph.bfs("A"));

graph.dfs(printNode);
