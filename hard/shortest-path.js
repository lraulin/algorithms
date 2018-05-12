/**
Using the JavaScript language, have the function ShortestPath(strArr) take 
strArr which will be an array of strings which models a non-looping Graph. The 
structure of the array will be as follows: The first element in the array will 
be the number of nodes N (points) in the array as a string. The next N elements 
will be the nodes which can be anything (A, B, C .. Brick Street, Main Street 
.. etc.). Then after the Nth element, the rest of the elements in the array 
will be the connections between all of the nodes. They will look like this: 
(A-B, B-C .. Brick Street-Main Street .. etc.). Although, there may exist no 
connections at all.

An example of strArr may be: 
["4","A","B","C","D","A-B","B-D","B-C","C-D"]. Your program should return the 
shortest path from the first Node to the last Node in the array separated by 
dashes. So in the example above the output should be A-B-D. Here is another 
example with strArr being 
["7","A","B","C","D","E","F","G","A-B","A-E","B-C","C-D","D-F","E-D","F-G"]. 
The output for this array should be A-E-D-F-G. There will only ever be one 
shortest path for the array. If no path between the first and last node exists, 
return -1. The array will at minimum have two nodes. Also, the connection A-B 
for example, means that A can get to B and B can get to A.  
 */

function parseNodeArray(arr) {
  let n = Number(arr[0]);
  let nodes = arr.slice(1, n + 1);
  let edges = arr.slice(n + 1);
  return { n, nodes, edges };
}

function Queue() {
  var a = [],
    b = 0;
  this.getLength = function() {
    return a.length - b;
  };
  this.isEmpty = function() {
    return 0 == a.length;
  };
  this.enqueue = function(b) {
    a.push(b);
  };
  this.dequeue = function() {
    if (0 != a.length) {
      var c = a[b];
      2 * ++b >= a.length && ((a = a.slice(b)), (b = 0));
      return c;
    }
  };
  this.peek = function() {
    return 0 < a.length ? a[b] : void 0;
  };
}

function Graph(size) {
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
    const queue = new Queue();
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
}

function ShortestPath(arr) {
  const { n, nodes, edges } = parseNodeArray(arr);
  const graph = new Graph(n);
  for (node of nodes) {
    graph.addVertex(node);
  }
  for (edge of edges) {
    graph.addEdge(edge[0], edge[2]);
  }
  const shortestPathA = graph.bfs(nodes[0]);
  const fromVertex = nodes[0];
  const toVertex = nodes[n - 1];
  const path = [];
  for (let v = toVertex; v !== fromVertex; v = shortestPathA.predecessors[v]) {
    path.push(v);
  }
  path.push(fromVertex);
  let str = path.pop();
  while (path.length > 0) {
    str += "-" + path.pop();
  }
  console.log(str);
  return str;
}

ShortestPath(["4", "X", "Y", "Z", "W", "X-Y", "Y-Z", "X-W"]);
