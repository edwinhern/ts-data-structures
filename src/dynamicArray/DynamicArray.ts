export class DynamicArray<T> {
  private array: { [index: number]: T };
  private size: number;

  constructor() {
    this.array = {};
    this.size = 0;
  }

  /**
   * @description Get the element at the specified index
   * @TimeComplexity O(1)
   */
  getElementAt(index: number): T | Error {
    this.validateIndex(index);

    return this.array[index];
  }

  /**
   *
   * @description Add an element to the end of the array
   * @TimeComplexity O(1)
   */
  addElement(value: T): void {
    this.array[this.size] = value;
    this.size++;
  }

  /**
   * @description Update an element at the specified index
   * @TimeComplexity O(1)
   */
  updateElementAt(index: number, value: T): Error | void {
    // Validate index is in bound
    this.validateIndex(index);

    this.array[index] = value;
  }

  /**
   *
   * @description Remove an element at the specified index
   * @TimeComplexity O(n)
   */
  removeElementAt(index: number): void {
    // Validate index value is the array size
    this.validateIndex(index);

    // Shifting back the values to overwrite the index value
    for (let i = index; i < this.size - 1; i++) {
      this.array[i] = this.array[i + 1];
    }
    // Remove the extra memory slot at the end
    delete this.array[this.size - 1];
    // Update the array size
    this.size--;
  }

  /**
   *
   * @description Find the index of an element in the array
   * @TimeComplexity O(n)
   */
  findElement(element: T): number {
    for (let i = 0; i < this.size; i++) {
      if (this.array[i] === element) {
        return i;
      }
    }

    return -1; // Element could not be found
  }

  /**
   *
   * @description Get the size of the array
   * @TimeComplexity O(1)
   */
  getSize(): number {
    return this.size;
  }

  /**
   *
   * @description Print the details of the array
   */
  printDetails(): void {
    console.log(`Array: ${JSON.stringify(this.array)}, Array Size: ${this.size}`);
  }

  /**
   *
   * @description Validate the index value
   * @TimeComplexity O(1)
   */
  private validateIndex(index: number): void {
    if (index < 0 || index >= this.size) {
      throw new Error('Index value is out of bounds');
    }
  }
}
