class Graph {
  constructor() {
    this.adjancencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjancencyList[vertex]) this.adjancencyList[vertex] = [];
  }

  removeVertex(vertex) {
    if (!this.adjancencyList[vertex]) return undefined;

    while (this.adjancencyList[vertex].length) {
      const adjacent = this.adjancencyList[vertex].pop();
      this.removeEdge(vertex, adjacent);
    }

    delete this.adjancencyList[vertex];
  }

  addEdge(v1, v2) {
    this.addVertex(v1);
    this.addVertex(v2);
    this.adjancencyList[v1].push(v2);
    this.adjancencyList[v2].push(v1);
  }

  removeEdge(v1, v2) {
    this.adjancencyList[v1] = this.adjancencyList[v1].filter((v) => v !== v2);
    this.adjancencyList[v2] = this.adjancencyList[v2].filter((v) => v !== v1);
  }

  dfs_recursive(start) {
    const result = []
    const visited = {}
    const adjacencyList = this.adjancencyList;

    if (!adjacencyList[start]) return undefined;

    (function dfs(vertex) {
      if (!vertex) return undefined;
      visited[vertex] = true
      result.push(vertex)

      adjacencyList[vertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          dfs(neighbor)
        }
      })
    })(start)

    return result;
  }

  dfs_iterative(start) {
    const stack = [start]
    const result = []
    const visited = {}
    let currentVertex

    visited[start] = true;

    while (stack.length) {
      currentVertex = stack.pop()
      result.push(currentVertex)

      this.adjancencyList[currentVertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true
          stack.push(neighbor)
        }
      })
    }

    return result
  }

  bfs(start) {
    const queue = [start]
    const result = []
    const visited = {}
    let currentVertex

    visited[start] = true

    while (queue.length) {
      currentVertex = queue.shift()
      result.push(currentVertex)

      this.adjancencyList[currentVertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor)
        }
      })
    }

    return result
  }
}

const g = new Graph();

g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")

g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B", "D")
g.addEdge("C", "E")
g.addEdge("D", "E")
g.addEdge("D", "F")
g.addEdge("E", "F")

// console.log(g.adjancencyList);

// g.removeEdge("Dallas", "Aspen")
// console.log(g.adjancencyList);

// g.removeVertex('B');

console.log(g.dfs_recursive("A"));
console.log(g.dfs_iterative("A"));
console.log(g.bfs("A"));

// console.log(g.adjancencyList);
