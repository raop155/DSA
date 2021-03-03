class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    var newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return newNode;
  }

  pop() {
    if (!this.head) return undefined;

    let poppedNode = this.tail;

    if (this.length === 1) {
      this.head = this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null
    }

    this.length--;

    return poppedNode;
  }

  shift() {
    if (!this.head) return undefined;
    const oldHead = this.head;

    if (this.length === 1) {
      this.pop()
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
      this.length--;
    }

    return oldHead;
  }

  unshift(val) {
    const node = new Node(val);

    if (this.length === 0) {
      this.push(val)
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
      this.length++;
    }

    return node;
  }

  get(index) {
    if (index < 0 || index > this.length - 1) return undefined;

    let count = 0;
    let currentNode = this.head;

    if (index <= this.length / 2) {
      while (count !== index) {
        currentNode = currentNode.next;
        count++;
      }
    } else {
      count = this.length - 1;
      currentNode = this.tail;
      while (count !== index) {
        currentNode = currentNode.prev;
        count--;
      }
    }

    return currentNode;
  }

  set(index, val) {
    const node = this.get(index);
    if (node) node.val = val;
    return !!node;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);

    const newNode = new Node(val);
    const prevNode = this.get(index - 1);
    const nextNode = prevNode.next;

    prevNode.next = newNode;
    newNode.prev = prevNode;
    newNode.next = nextNode;
    nextNode.prev = newNode;

    this.length++;

    return newNode;
  }

  remove(index) {
    console.log(index, this.length);
    if (index < 0 || index > this.length - 1) return false;
    if (index === 0) return !!this.shift();
    if (index === this.length - 1) return !!this.pop();

    const removedNode = this.get(index);
    const beforeNode = removedNode.prev
    const afterNode = removedNode.next

    beforeNode.next = removedNode.next;
    afterNode.prev = removedNode.prev;
    removedNode.prev = removedNode.next = null;

    this.length--;

    return !!removedNode;
  }

  view() {
    let count = 0;
    let current = this.head;
    let linkedListView = 'head -> ';
    let arrow = '->';

    while (count < this.length) {
      linkedListView += `Node([${current.prev && current.prev.val}]${current.val}[${current.next && current.next.val}]) ${arrow} `;
      current = current.next;
      count++;
    }

    linkedListView += ' null';

    console.log(linkedListView);
  }
}

const list = new DoublyLinkedList();
list.push('HELLO');
list.push('WELCOME');
list.push('GOODBYE');
// list.push('!');
// console.log(list);
// list.view();
// console.log(list.push('PUSHEADO'));
// console.log(list.push('PUSHEADO2'));
// console.log(list.pop());
// console.log(list.shift());
// console.log(list.unshift('!!!'));
// console.log(list.unshift('!!!2'));
// console.log(list.get(0));
// console.log(list.set(-1, 'AHORA SOY 2'));
// console.log(list.insert(2, 'INSERT TOTO 2'));
console.log(list.remove(1));
// console.log(list.reverse());


console.log('---------------------------');
// console.log(list);
list.view();
