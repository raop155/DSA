class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value)

    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;

      while (true) {
        if (value === current.value) return undefined;

        if (value < current.value) {
          if (!current.left) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if (value > current.value) {
          if (!current.right) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  find(value) {
    let current = this.root;

    while (true) {
      if (!current) return false;
      if (value === current.value) return true

      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      }
    }
  }

  bfs() {
    let node = this.root;
    let data = []
    let queue = []
    if (node) queue.push(node)

    while (queue.length > 0) {
      node = queue.shift()
      data.push(node.value)

      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }

    return data;
  }

  dfs_pre() {
    let data = []

    const traverse = (node) => {
      if (!node) return

      data.push(node.value)
      traverse(node.left)
      traverse(node.right)
    }

    traverse(this.root)

    return data;
  }

  dfs_post() {
    let data = []

    const traverse = (node) => {
      if (!node) return

      traverse(node.left)
      traverse(node.right)
      data.push(node.value)
    }

    traverse(this.root)

    return data;
  }

  dfs_order() {
    let data = []

    const traverse = (node) => {
      if (!node) return

      traverse(node.left)
      data.push(node.value)
      traverse(node.right)
    }

    traverse(this.root)

    return data;
  }
}

const tree = new BinarySearchTree();
tree.insert(10)
tree.insert(6)
tree.insert(15)
tree.insert(3)
tree.insert(8)
tree.insert(20)

console.log("bfs", tree.bfs())
console.log("pre dfs", tree.dfs_pre())
console.log("post dfs", tree.dfs_post())
console.log("order dfs", tree.dfs_order())

// console.log(tree);
