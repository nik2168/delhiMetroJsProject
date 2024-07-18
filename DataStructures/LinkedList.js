class Node {
  constructor(val) {
    (this.val = val), (this.next = null);
  }
}

class List {
  constructor() {
    (this.head = null), (this.tail = null), (this.length = 0);
  }

  push(val) {
    let newNode = new Node(val);

    if (!this.length) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return;
  }

  pop() {
    if (!this.head) return undefined;
    else if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else if (this.length === 2) {
      this.tail = this.head;
      this.tail.next = null;
    } else {
      let temp = this.head;
      while (temp.next.next !== null) {
        temp = temp.next;
      }
      let lastNode = temp.next;
      this.tail === temp;
      this.tail.next = null;
    }
    this.length--;
    return;
  }

  shift() {
    if (!this.head) return undefined;
    else if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      let curHead = this.head;
      this.head = curHead.next;
    }
    this.length--;
    return;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    reutrn;
  }

  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    const counter = 0;
    const current = this.head;
    while (current.next) {
      current = current.next;
      counter++;
    }
    return current;
  }

  set(index, val) {
    const foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  // The insert method takes an index number and a value as parameters, and inserts the value at the given index in the list
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);

    const newNode = new Node(val);
    const prev = this.get(index - 1);
    const temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }
  // The remove method takes an index number as parameter and removes the node at the given index in the list
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    const previousNode = this.get(index - 1);
    const removed = previousNode.next;
    previousNode.next = removed.next;
    this.length--;
    return removed;
  }
  // The reverse method reverses the list and all pointers so that the head becomes the tail and the tail becomes the head
  reverse() {
    const node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    const prev = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}
