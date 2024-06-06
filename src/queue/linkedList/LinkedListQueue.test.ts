import { LinkedListQueue } from '@/queue/linkedList';

describe('Queue', () => {
  let queue: LinkedListQueue<number>;

  beforeEach(() => {
    queue = new LinkedListQueue<number>();
  });

  describe('push', () => {
    it('should add elements to the Queue', () => {
      queue.push(1);
      queue.push(2);
      expect(queue.length).toBe(2);
    });
  });

  describe('pop', () => {
    it('should remove and return the first element', () => {
      queue.push(1);
      const firstElement = queue.pop();

      expect(firstElement).toBe(1);
      expect(queue.length).toBe(0);
    });

    it('should return undefined if the array is empty', () => {
      expect(queue.pop()).toBeNull();
    });
  });

  describe('copy', () => {
    it('should copy and add value to end of queue', () => {
      queue.push(1);
      queue.push(2);
      queue.push(3);
      queue.copy(1); // Value copied should be 2

      expect(queue.back()).toBe(2);
      expect(queue.length).toBe(4);
    });

    it('should throw error for out of bounds index', () => {
      expect(() => queue.copy(2)).toThrowError('Index value is out of bounds');
    });
  });

  describe('deleteAll', () => {
    it('should reset queue', () => {
      queue.push(1);
      queue.push(2);
      queue.push(3);

      expect(queue.deleteAll());
      expect(queue.length).toBe(0);
    });
  });
});
