// Operations required: push, pop, count, copy, delete_all

export class ArrayQueue<T> {
  private elements: T[];

  constructor() {
    this.elements = [];
  }

  push(value: T): void {
    this.elements[this.elements.length] = value;

    // Alternatively: this.elements.push(value);
  }

  pop(): T | null {
    if (this.elements.length === 0) return null;

    const firstElement = this.elements[0];

    for (let i = 0; i < this.elements.length - 1; i++) {
      this.elements[i] = this.elements[i + 1];
    }
    this.elements.length--;

    return firstElement; // Alternatively for whole function code: return this.elements.shift();
  }

  count(): number {
    return this.elements.length;
  }

  copy(index: number): T {
    if (index < 0 || index >= this.elements.length) {
      throw new Error('Index value is out of bounds');
    }

    const value = this.elements[index];
    this.push(value); // Alternatively: this.elements.push(value);
    return value;
  }

  deleteAll(): void {
    this.elements = [];
  }
}

// Example usage:
const queue = new ArrayQueue<number>();
queue.push(1);
queue.push(2);
queue.push(3);

console.log(queue.count()); // Output: 3

queue.pop();
console.log(queue.count()); // Output: 2

queue.copy(0); // Copy value at index 0 (which is 2) and add it to the end
console.log(queue.count()); // Output: 3

queue.deleteAll();
console.log(queue.count()); // Output: 0
