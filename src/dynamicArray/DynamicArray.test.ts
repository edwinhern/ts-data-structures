import { DynamicArray } from './DynamicArray';

describe('DynamicArray', () => {
  let dynamicArray: DynamicArray<number>;

  beforeEach(() => {
    dynamicArray = new DynamicArray<number>();
  });

  describe('getElementAt', () => {
    it('should get element at specific index', () => {
      dynamicArray.addElement(1);
      expect(dynamicArray.getElementAt(0)).toBe(1);
    });

    it('should throw error for out of bounds index', () => {
      expect(() => dynamicArray.getElementAt(0)).toThrowError('Index value is out of bounds');
    });
  });

  describe('addElement', () => {
    it('should add elements to the array', () => {
      dynamicArray.addElement(1);
      dynamicArray.addElement(2);
      expect(dynamicArray.getSize()).toBe(2);
    });
  });

  describe('updateElementAt', () => {
    it('should update element at specific index', () => {
      dynamicArray.addElement(1);
      dynamicArray.updateElementAt(0, 2);
      expect(dynamicArray.getElementAt(0)).toBe(2);
    });

    it('should throw error for out of bounds index', () => {
      expect(() => dynamicArray.updateElementAt(0, 10)).toThrowError('Index value is out of bounds');
    });
  });

  describe('removeElementAt', () => {
    it('should remove element at specific index', () => {
      dynamicArray.addElement(1);
      dynamicArray.addElement(2);
      dynamicArray.removeElementAt(0);
      expect(dynamicArray.getSize()).toBe(1);
      expect(dynamicArray.getElementAt(0)).toBe(2);
    });

    it('should throw error for out of bounds index', () => {
      expect(() => dynamicArray.removeElementAt(0)).toThrowError('Index value is out of bounds');
    });
  });

  describe('findElement', () => {
    it('should find element in the array', () => {
      dynamicArray.addElement(1);
      expect(dynamicArray.findElement(1)).toBe(0);
    });

    it('should return -1 if element is not found', () => {
      expect(dynamicArray.findElement(1)).toBe(-1);
    });
  });

  describe('getSize', () => {
    it('should return size of the array', () => {
      dynamicArray.addElement(1);
      expect(dynamicArray.getSize()).toBe(1);
    });
  });

  describe('printDetails', () => {
    it('should print details of the array', () => {
      const consoleSpy = vi.spyOn(console, 'log');

      dynamicArray.addElement(1);
      dynamicArray.addElement(2);
      dynamicArray.printDetails();
      expect(consoleSpy).toHaveBeenCalledWith('Array: {"0":1,"1":2}, Array Size: 2');
      consoleSpy.mockRestore();
    });
  });
});
