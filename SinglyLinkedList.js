class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const node = new Node(val);

    if (this.head) {
      this.tail.next = node;
      this.tail = node;
    } else {
      this.head = node;
      this.tail = this.head;
    }

    this.length++;

    return node;
  }

  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = this.tail = null;
    }

    return current;
  }

  shift() {
    if (!this.head) return undefined;
    const oldHead = this.head;
    this.head = oldHead.next;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }

    return oldHead;
  }

  unshift(val) {
    const node = new Node(val);

    if (this.head) {
      node.next = this.head;
      this.head = node;
    } else {
      this.head = node;
      this.tail = this.head;
    }

    this.length++;

    return node;
  }

  get(index) {
    if (index < 0 || index > this.length - 1) return undefined;

    let currentNode = this.head;

    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }

    return currentNode;
  }

  set(index, val) {
    const node = this.get(index);

    if (node) {
      node.val = val;
    }

    return node;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);

    const prevNode = this.get(index - 1);
    const newNode = new Node(val);

    newNode.next = prevNode.next;
    prevNode.next = newNode;

    this.length++;

    return newNode;
  }

  remove(index) {
    console.log(index, this.length);
    if (index < 0 || index > this.length - 1) return false;
    if (index === 0) return !!this.shift();
    if (index === this.length - 1) return !!this.pop();

    const prevNode = this.get(index - 1);
    const removedNode = prevNode.next;
    prevNode.next = removedNode.next;

    this.length--;

    return removedNode;
  }

  reverse() {
    this.tail = this.head;

    let prev = null;
    let curr = this.head;

    while (curr) {
      const next = curr.next;
      curr.next = prev;

      prev = curr;
      curr = next;
    }

    this.head = prev;
  }

  view() {
    let count = 0;
    let current = this.head;
    let linkedListView = 'head ->';
    let arrow = '->';

    while (count < this.length) {
      linkedListView += `Node(${current.val}) ${arrow}`;
      current = current.next;
      count++;
    }

    linkedListView += ' null';

    console.log(linkedListView);
  }
}

const list = new SinglyLinkedList();
list.push('HELLO');
// list.push('GOODBYE');
// list.push('!');
// console.log(list);
// list.view();
// console.log(list.push('PUSHEADO'));
// console.log(list.push('PUSHEADO2'));
console.log(list.pop());
// console.log(list.shift());
// console.log(list.unshift('!!!'));
// console.log(list.get(2));
// console.log(list.set(2, 'AHORA SOY 2'));
// console.log(list.insert(2222, 'INSERT TOTO 2'));
// console.log(list.remove(3));
// console.log(list.reverse());


console.log('---------------------------');
console.log(list);
list.view();
