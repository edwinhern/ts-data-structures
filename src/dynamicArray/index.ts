export class DynamicArray<T> {
  private array: { [index: number]: T };
  public length: number;

  constructor() {
    this.array = {};
    this.length = 0;
  }

  /**
   *
   * @description Add an element to the end of the array
   * @TimeComplexity O(1)
   */
  push(value: T): void {
    this.array[this.length] = value;
    this.length++;
  }

  /**
   *
   * @description Remove last element of the array
   * @TimeComplexity O(1)
   */
  pop(): T {
    const lastElement = this.array[this.length - 1];
    delete this.array[this.length - 1];
    this.length--;
    return lastElement;
  }

  /**
   * @description Get an element at the specified index
   * @TimeComplexity O(1)
   */
  get(index: number): T | Error {
    if (index < 0 || index >= this.length) {
      throw new Error('Index value is out of bounds');
    }
    return this.array[index];
  }

  /**
   * @description Set an element at the specified index
   * @TimeComplexity O(1)
   */
  set(index: number, value: T): Error | void {
    // Validate index is in bound
    if (index < 0 || index >= this.length) {
      throw new Error('Index value is out of bounds');
    }
    this.array[index] = value;
  }

  /**
   * @description Find the first element that satisfies the provided testing function
   * @TimeComplexity O(n)
   */
  find(predicate: (value: T, index: number, obj: { [index: number]: T }) => boolean): T | undefined {
    for (let i = 0; i < this.length; i++) {
      if (predicate(this.array[i], i, this.array)) {
        return this.array[i];
      }
    }
    return undefined;
  }

  /**
   *
   * @description Remove first element, update array, and return first element
   * @TimeComplexity O(n)
   */
  shift(): T | undefined {
    // Validate array isn't empty
    if (this.length === 0) {
      return undefined;
    }

    // Removing the first element, updating the array, and returning the first element
    const firstElement = this.array[0];

    // Update array
    for (let i = 0; i < this.length - 1; i++) {
      this.array[i] = this.array[i + 1];
    }

    // Delete last value
    delete this.array[this.length - 1];
    this.length--;

    return firstElement;
  }

  /**
   * @description Add one or more elements to the beginning of the array and return the new length
   * @TimeComplexity O(n)
   */
  unshift(...items: T[]): number {
    // first capture the new Size
    const newLength = this.length + items.length;

    // iterate to first move existing values to the maxSize of the array
    for (let i = this.length - 1; i >= 0; i--) {
      this.array[i + items.length] = this.array[i];
    }

    // Then update the beginning array values based on the items length to overwrite new values
    for (let i = 0; i < items.length; i++) {
      this.array[i] = items[i];
    }

    // update length size
    this.length = newLength;
    // return size
    return newLength;
  }

  /**
   *
   * @description Find the index of an element in the array
   * @TimeComplexity O(n)
   */
  indexOf(element: T): number {
    for (let i = 0; i < this.length; i++) {
      if (this.array[i] === element) {
        return i;
      }
    }

    return -1; // Element could not be found
  }

  /**
   *
   * @description Print the details of the array
   */
  print(): void {
    console.log(`Array: ${JSON.stringify(this.array)}, Array length: ${this.length}`);
  }
}
