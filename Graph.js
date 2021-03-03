class Graph {
  constructor() {
    this.adjancencyList = {}
  }

  addVertex(name) {
    if (!this.adjancencyList[name]) this.adjancencyList[name] = []
  }
}

const g = new Graph();
