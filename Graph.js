class Graph {
  constructor() {
    this.adjancencyList = {}
  }

  addVertex(vertex) {
    if (!this.adjancencyList[vertex]) this.adjancencyList[vertex] = []
  }

  removeVertex(vertex) {
    if (!this.adjancencyList[vertex]) return undefined

    while (this.adjancencyList[vertex].length) {
      const adjacent = this.adjancencyList[vertex].pop()
      this.removeEdge(vertex, adjacent)
    }

    delete this.adjancencyList[vertex];
  }

  addEdge(v1, v2) {
    this.addVertex(v1);
    this.addVertex(v2);
    this.adjancencyList[v1].push(v2)
    this.adjancencyList[v2].push(v1)
  }

  removeEdge(v1, v2) {
    this.adjancencyList[v1] = this.adjancencyList[v1].filter(v => v !== v2)
    this.adjancencyList[v2] = this.adjancencyList[v2].filter(v => v !== v1)
  }
}

const g = new Graph();

g.addVertex("Dallas")
g.addVertex("Tokyo")
g.addVertex("Aspen")
g.addVertex("Los Angeles")
g.addVertex("Hong Kong")
g.addEdge("Dallas", "Tokyo")
g.addEdge("Dallas", "Aspen")
g.addEdge("Hong Kong", "Tokyo")
g.addEdge("Hong Kong", "Dallas")
g.addEdge("Hong Kong", "Aspen")
g.addEdge("Hong Kong", "Los Angeles")
g.addEdge("Los Angeles", "Hong Kong")
g.addEdge("Los Angeles", "Aspen")

// console.log(g.adjancencyList);

// g.removeEdge("Dallas", "Aspen")
// console.log(g.adjancencyList);

g.removeVertex("Hong Kong")

console.log(g.adjancencyList);
