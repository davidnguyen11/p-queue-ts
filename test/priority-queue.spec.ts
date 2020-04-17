import { PriorityQueue } from '../src';
import { IPriorityQueue } from '../typing/priority-queue';
import { testCase1, testCase2, testCase3 } from './fixtures/test-case';

describe('testing priority queue', () => {
  let p: IPriorityQueue<number>;

  describe('max priority queue', () => {
    beforeEach(() => {
      p = new PriorityQueue();
    });

    afterEach(() => {
      p = null;
    });

    it('should return max heap of test case 1', () => {
      for (let i = 0; i < testCase1.length; i++) {
        p.push(testCase1[i]);
      }
      const actual = p.toArray();
      const expected = [8, 7, 4, 1, 2, 1];
      expect(actual).toEqual(expected);
    });

    it('should return max heap of test case 2', () => {
      for (let i = 0; i < testCase2.length; i++) {
        p.push(testCase2[i]);
      }
      const actual = p.toArray();
      const expected = [4, 3, 4, 3, 2];
      expect(actual).toEqual(expected);
    });

    it('should get the max value without remove', () => {
      for (let i = 0; i < testCase2.length; i++) {
        p.push(testCase2[i]);
      }
      const max = p.top();
      expect(max).toEqual(4);

      const actual = p.toArray();
      const expected = [4, 3, 4, 3, 2];
      expect(actual).toEqual(expected);
    });

    it('should extract the max value & rebuild max heap of test case 2', () => {
      for (let i = 0; i < testCase2.length; i++) {
        p.push(testCase2[i]);
      }
      expect(p.size()).toEqual(testCase2.length);
      const max = p.pop();
      expect(max).toEqual(4);
      expect(p.size()).toEqual(testCase2.length - 1);

      const actual = p.toArray();
      const expected = [4, 3, 2, 3];
      expect(actual).toEqual(expected);
    });

    it('should call empty & call pop and top with empty queue', () => {
      for (let i = 0; i < testCase1.length; i++) {
        p.push(testCase1[i]);
      }

      const expected = [8, 7, 4, 2, 1, 1];
      let index = 0;

      while (!p.empty()) {
        const item = p.pop();
        expect(item).toEqual(expected[index]);
        index++;
      }

      let item = p.top();
      expect(item).toEqual(null);
      item = p.pop();
      expect(item).toEqual(null);
    });

  });

  describe('testing with array of object', () => {
    it('should return max heap of test case 3', () => {
      p = new PriorityQueue(function (a: any, b: any) {
        return a.value < b.value;
      });

      for (let i = 0; i < testCase3.length; i++) {
        p.push(testCase3[i] as any);
      }
      const actual = p.toArray();
      const expected = [
        { text: 'e', value: 8 },
        { text: 'b', value: 7 },
        { text: 'c', value: 4 },
        { text: 'd', value: 1 },
        { text: 'a', value: 2 },
        { text: 'f', value: 1 },
      ];
      expect(actual).toEqual(expected);
    });

    it('should return min heap of test case 3', () => {
      p = new PriorityQueue(function (a: any, b: any) {
        return a.value > b.value;
      });

      for (let i = 0; i < testCase3.length; i++) {
        p.push(testCase3[i] as any);
      }
      const actual = p.toArray();
      const expected = [
        { text: 'd', value: 1 },
        { text: 'a', value: 2 },
        { text: 'f', value: 1 },
        { text: 'b', value: 7 },
        { text: 'e', value: 8 },
        { text: 'c', value: 4 }
      ];
      expect(actual).toEqual(expected);
    });

    it('should extract the "max" value & rebuild "max" heap of test case 3', () => {
      p = new PriorityQueue(function (a: any, b: any) {
        return a.value < b.value;
      });

      for (let i = 0; i < testCase3.length; i++) {
        p.push(testCase3[i] as any);
      }

      expect(p.size()).toEqual(testCase3.length);
      const max = p.pop();
      expect(max).toEqual({ text: 'e', value: 8 });
      expect(p.size()).toEqual(testCase3.length - 1);

      const actual = p.toArray();
      const expected = [
        { text: 'b', value: 7 },
        { text: 'a', value: 2 },
        { text: 'c', value: 4 },
        { text: 'd', value: 1 },
        { text: 'f', value: 1 }
      ];
      expect(actual).toEqual(expected);
    });

    it('should extract the "min" value & rebuild "min" heap of test case 3', () => {
      p = new PriorityQueue(function (a: any, b: any) {
        return a.value > b.value;
      });

      for (let i = 0; i < testCase3.length; i++) {
        p.push(testCase3[i] as any);
      }

      expect(p.size()).toEqual(testCase3.length);
      const min = p.pop();
      expect(min).toEqual({ text: 'd', value: 1 });
      expect(p.size()).toEqual(testCase3.length - 1);

      const actual = p.toArray();
      const expected = [
        { text: 'f', value: 1 },
        { text: 'a', value: 2 },
        { text: 'c', value: 4 },
        { text: 'b', value: 7 },
        { text: 'e', value: 8 }
      ];
      expect(actual).toEqual(expected);
    });
  });

  describe('min priority queue', () => {
    beforeEach(() => {
      p = new PriorityQueue(function (a, b) {
        return a > b;
      });
    });

    afterEach(() => {
      p = null;
    });

    it('should return min heap of test case 1', () => {
      for (let i = 0; i < testCase1.length; i++) {
        p.push(testCase1[i]);
      }
      const actual = p.toArray();
      const expected = [1, 2, 1, 7, 8, 4];
      expect(actual).toEqual(expected);
    });

    it('should return min heap of test case 2', () => {
      for (let i = 0; i < testCase2.length; i++) {
        p.push(testCase2[i]);
      }
      const actual = p.toArray();
      const expected = [2, 3, 4, 4, 3];
      expect(actual).toEqual(expected);
    });

    it('should extract the min value & rebuild min heap of test case 2', () => {
      for (let i = 0; i < testCase2.length; i++) {
        p.push(testCase2[i]);
      }
      const min = p.pop();
      expect(min).toEqual(2);

      const actual = p.toArray();
      const expected = [3, 3, 4, 4];
      expect(actual).toEqual(expected);
    });
  });
});