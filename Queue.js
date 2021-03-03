class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(value) {
    const newNode = new Node(value);

    if (this.size === 0) {
      this.first = this.last = newNode;
    } else {
      this.last.next = newNode
      this.last = newNode;
    }

    return ++this.size;
  }

  dequeue() {
    if (this.size === 0) {
      return undefined
    }

    if (this.size === 1) {
      this.first = this.last = null
    } else {
      const temp = this.first;
      this.first = temp.next;
      temp.next = null;
    }

    this.size--;

    return temp;
  }

  view() {
    let count = 0;
    let current = this.first;
    let linkedListView = 'head -> ';
    let arrow = '->';

    while (count < this.size) {
      linkedListView += `Node(${current.value}[${current.next && current.next.value}]) ${arrow} `;
      current = current.next;
      count++;
    }

    linkedListView += ' null';

    console.log(linkedListView);
  }

}

const list = new Queue();
list.enqueue('HELLO');
list.enqueue('WELCOME');
console.log(list.enqueue('GOODBYE'));
console.log(list.dequeue());


console.log('---------------------------');
list.view();