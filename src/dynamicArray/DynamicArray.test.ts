import { DynamicArray } from './DynamicArray';

describe('DynamicArray', () => {
  let dynamicArray: DynamicArray<number>;

  beforeEach(() => {
    dynamicArray = new DynamicArray<number>();
  });

  it('should add elements to the array', () => {
    dynamicArray.addElement(1);
    dynamicArray.addElement(2);
    expect(dynamicArray.getSize()).toBe(2);
  });

  it('should get element at specific index', () => {
    dynamicArray.addElement(1);
    expect(dynamicArray.getElementAt(0)).toBe(1);
  });

  it('should update element at specific index', () => {
    dynamicArray.addElement(1);
    dynamicArray.updateElementAt(0, 2);
    expect(dynamicArray.getElementAt(0)).toBe(2);
  });

  it('should remove element at specific index', () => {
    dynamicArray.addElement(1);
    dynamicArray.addElement(2);
    dynamicArray.removeElementAt(0);
    expect(dynamicArray.getSize()).toBe(1);
    expect(dynamicArray.getElementAt(0)).toBe(2);
  });

  it('should find element in the array', () => {
    dynamicArray.addElement(1);
    expect(dynamicArray.findElement(1)).toBe(0);
  });

  it('should return size of the array', () => {
    dynamicArray.addElement(1);
    expect(dynamicArray.getSize()).toBe(1);
  });
});
