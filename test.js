class DoublyLinkedList {


  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  setTail(val) {
    this.tail = val;
  }

  getTail() {
    return this.tail
  }
}

const list = new DoublyLinkedList()
list.setTail("TAILED!")
console.log(list.getTail());
