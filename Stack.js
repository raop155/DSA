class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(value) {
    const newNode = new Node(value);

    if (this.size === 0) {
      this.first = this.last = newNode;
    } else {
      const temp = this.first;
      this.first = newNode
      this.first.next = temp;
    }

    return ++this.size;
  }

  pop() {
    if (this.size === 0) {
      return undefined
    }

    const temp = this.first;
    if (this.size === 1) {
      this.first = this.last = null
    } else {
      this.first = temp.next;
      temp.next = null;
    }

    this.size--;

    return temp.value;
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

const list = new Stack();
list.push('HELLO');
list.push('WELCOME');
// console.log(list.push('GOODBYE'));
console.log(list.pop());


console.log('---------------------------');
list.view();