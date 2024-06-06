// Operations required: push, pop, count, copy, delete_all

class QNode<T> {
  public data: T;
  public next: QNode<T> | null;

  constructor(data: T) {
    this.data = data;
    this.next = null;
  }
}

export class Queue<T> {
  public length: number;
  private frontNode: QNode<T> | null;
  private rearNode: QNode<T> | null;

  constructor() {
    this.frontNode = null;
    this.rearNode = null;
    this.length = 0;
  }

  // Add an element to the end of the queue
  push(value: T): void {
    const newNode = new QNode(value);

    if (!this.rearNode) {
      this.frontNode = newNode;
      this.rearNode = newNode;
    } else {
      this.rearNode.next = newNode;
      this.rearNode = newNode;
    }

    this.length++;
  }

  // Remove the first element from the queue
  pop(): T | null {
    if (this.length === 0 || !this.frontNode) return null;

    // We need to return the first element value
    const frontValue = this.frontNode.data;
    // Update the frontNode to use nextNode
    this.frontNode = this.frontNode.next;
    // Decrement size
    this.length--;

    // If we removed out last node, then reset the rearNode to be null
    if (this.length === 0) {
      this.rearNode = null;
    }

    return frontValue;
  }

  copy(nodeIndex: number): void | Error {
    if (nodeIndex < 0 || nodeIndex >= this.length) {
      throw new Error('Index value is out of bounds');
    }

    const findNodeValue = () => {
      let currentNode = this.frontNode;
      let currentIndex = 0;
      while (currentNode && currentIndex < nodeIndex) {
        currentNode = currentNode.next;
        currentIndex++;
      }

      return currentNode?.data;
    };

    const foundValue = findNodeValue();
    if (foundValue) {
      this.push(foundValue);
    }
  }

  back(): T | undefined {
    return this.rearNode?.data;
  }

  deleteAll(): void {
    this.frontNode = null;
    this.rearNode = null;
    this.length = 0;
  }
}
