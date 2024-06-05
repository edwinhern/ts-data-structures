// What is a Queue?

// * A queue is a data structure that stores a collection of elements and follow the FIFO (First In First Out) principle.
// * It has two main operations: add, remove.
// * It can also have other operations like peek, isEmpty, isFull and size.

class QNode {
  public data: any;
  public next: QNode | null;

  constructor(data: any) {
    this.data = data;
    this.next = null;
  }
}

// Queue Implementation
class Queue {
  private node: QNode | null;
  private recentNode: QNode | null;
  private size: number;

  constructor() {
    this.node = null;
    this.recentNode = null;
    this.size = 0;
  }

  // Add
  push(value: any) {
    const newNode = new QNode(value);

    if (this.recentNode) {
      this.node.next = newNode;
    } else {
      this.node = newNode;
      this.recentNode = newNode;
      this.size++;
    }
  }

  // Remove

  // Duplicate

  // isEmpty

  // size
  count() {
    return this.size;
  }
}

// Create a queue using linked list and array
