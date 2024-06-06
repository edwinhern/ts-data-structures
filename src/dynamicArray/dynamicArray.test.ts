import { DynamicArray } from '@/dynamicArray';

describe('DynamicArray', () => {
  let dynamicArray: DynamicArray<number>;

  beforeEach(() => {
    dynamicArray = new DynamicArray<number>();
  });

  describe('push', () => {
    it('should add elements to the array', () => {
      dynamicArray.push(1);
      dynamicArray.push(2);
      expect(dynamicArray.length).toBe(2);
    });
  });

  describe('pop', () => {
    it('should remove and return the last element', () => {
      dynamicArray.push(1);
      dynamicArray.push(2);
      dynamicArray.push(3);
      const lastElement = dynamicArray.pop();
      expect(lastElement).toBe(3);
      expect(dynamicArray.get(0)).toBe(1);
      expect(dynamicArray.get(1)).toBe(2);
      expect(dynamicArray.length).toBe(2);
    });

    it('should return undefined if the array is empty', () => {
      expect(dynamicArray.pop()).toBeUndefined();
    });
  });

  describe('get', () => {
    it('should get element at specific index', () => {
      dynamicArray.push(1);
      expect(dynamicArray.get(0)).toBe(1);
    });

    it('should throw error for out of bounds index', () => {
      expect(() => dynamicArray.get(0)).toThrowError('Index value is out of bounds');
    });
  });

  describe('set', () => {
    it('should update element at specific index', () => {
      dynamicArray.push(1);
      dynamicArray.set(0, 2);
      expect(dynamicArray.get(0)).toBe(2);
    });

    it('should throw error for out of bounds index', () => {
      expect(() => dynamicArray.set(0, 10)).toThrowError('Index value is out of bounds');
    });
  });

  describe('find', () => {
    const predicate = (value: number) => value === 1;

    it('should find element in the array', () => {
      dynamicArray.push(1);
      expect(dynamicArray.find(predicate)).toBe(1);
    });

    it('should return -1 if element is not found', () => {
      expect(dynamicArray.find(predicate)).toBeUndefined();
    });
  });

  describe('shift', () => {
    it('should remove and return the first element', () => {
      dynamicArray.push(1);
      dynamicArray.push(2);
      dynamicArray.push(3);
      const firstElement = dynamicArray.shift();
      expect(firstElement).toBe(1);
      expect(dynamicArray.get(0)).toBe(2);
      expect(dynamicArray.get(1)).toBe(3);
      expect(dynamicArray.length).toBe(2);
    });

    it('should return undefined if the array is empty', () => {
      expect(dynamicArray.shift()).toBeUndefined();
    });
  });

  describe('unshift', () => {
    it('should add elements to the beginning of the array', () => {
      dynamicArray.push(1);
      dynamicArray.push(2);
      dynamicArray.unshift(3, 4);
      expect(dynamicArray.get(0)).toBe(3);
      expect(dynamicArray.get(1)).toBe(4);
      expect(dynamicArray.get(2)).toBe(1);
      expect(dynamicArray.get(3)).toBe(2);
      expect(dynamicArray.length).toBe(4);
    });
  });

  describe('indexOf', () => {
    it('should find element in the array', () => {
      dynamicArray.push(1);
      expect(dynamicArray.indexOf(1)).toBe(0);
    });

    it('should return -1 if element is not found', () => {
      expect(dynamicArray.indexOf(1)).toBe(-1);
    });
  });

  describe('print', () => {
    it('should print details of the array', () => {
      const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {});

      dynamicArray.push(1);
      dynamicArray.push(2);
      dynamicArray.print();
      expect(consoleSpy).toHaveBeenCalledWith('Array: {"0":1,"1":2}, Array length: 2');
    });
  });
});
