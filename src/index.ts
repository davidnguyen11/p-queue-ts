import { IPriorityQueue } from '../typings/priority-queue';

/**
 * The priority queue is a collection in which items can be added at any time, but the only item that can be removed is the one with the highest priority.
 * A heap is a complete binary tree in which the value of a node is less than or greater than all the values in its subtrees.
 * By convention, the smallest or largest element is the one with the highest priority.
 * This lib using "Max Heap" as the default to heapify.
 * @example Changing from Max Priority Queue to Min Priority Queue
 * const p = new PriorityQueue(function(a, b) { return a > b; });
 * @example Add elements to queue
 * const p = new PriorityQueue();
 * p.push(1); // adding "1" to queue
 * p.push(2); // adding "2" to queue
 * p.push(3); // adding "3" to queue
 * // After "push", queue looks like this: [3, 1, 2]
 * @example Extract the largest or smallest element from the queue
 * const elmenet = p.pop(); // return "3" which is the largest element in queue
 * // After "pop", queue looks like this: [2, 1]
 * @example Peek the element (get the largest or smallest element without removing it from queue)
 * const elmenet = p.top(); // return "3" which is the largest element in queue
 * // After "pop", queue looks like this: [3, 1, 2]
 * @example Get the size of the queue
 * const size = p.size(); // return "3", because the queue has 3 elements
 * @example Check whether the queue is empty or not
 * const isEmpty = p.empty();
 * // return true, if the queue has elements
 * // return false, if the queue is empty
 * @example Extract queue to array
 * const array = p.toArray(); // This will extract all elements from queue to array
 * // return array = [3, 1, 2];
 */
export class PriorityQueue<T> implements IPriorityQueue<T> {
  private _queue: T[];
  private _comparator: (item1: T, item2: T) => boolean;

  constructor(comparator?: (item1: T, item2: T) => boolean) {
    this._queue = [];
    this._comparator = comparator;
  }

  /**
   * Inserts the specified element into this priority queue.
   * Everytime adding new element to queue, the queue is started "sift up" to rebuild the heap
   * @param value
   */
  public push(value: T) {
    this._queue.push(value);
    let pos = this._queue.length - 1;

    while (
      pos !== 0 &&
      this._compare(this._queue[this._parentOf(pos)], this._queue[pos])
    ) {
      this._swap(pos, this._parentOf(pos));
      pos = this._parentOf(pos);
    }
  }

  /**
   * Retrieves, but does not remove, the head of this queue, or returns null if this queue is empty.
   */
  public top() {
    return this._queue.length > 0 ? this._queue[0] : null;
  }

  /**
   * Retrieves and removes the head of this queue, or returns null if this queue is empty.
   * Everytime pop element from queue, the queue is started "sift down" to rebuild the heap
   */
  public pop() {
    if (this._queue.length === 0) {
      return null;
    }

    const item = this._queue[0];
    this._queue[0] = this._queue[this._queue.length - 1];
    this._swap(0, this._queue.length - 1);
    this._queue.pop();
    this._heapify(0);
    return item;
  }

  /**
   * Returns the number of elements in this collection.
   */
  public size() {
    return this._queue.length;
  }

  /**
   * Checks whether the queue is empty.
   */
  public empty() {
    return !this._queue.length;
  }

  /**
   * Returns an array containing all of the elements in this queue.
   */
  public toArray() {
    return [...this._queue];
  }

  /**
   * Removes all of the elements from this priority queue.
   */
  public clear() {
    this._queue = [];
  }

  /**
   * Returns true if this queue contains the specified element.
   * @param value
   * @param comparator
   */
  public contains(value: T, comparator?: (item: T) => boolean) {
    if (!this._queue.length) return false;

    const func = comparator || ((item: T): boolean => item === value);

    const mid = Math.floor(this._queue.length / 2);
    let childIndex1: number;
    let childIndex2: number;
    let index = 0;

    while (index <= mid - 1) {
      childIndex1 = 2 * index + 1;
      childIndex2 = 2 * index + 2;

      if (
        (this._queue[index] && func(this._queue[index])) ||
        (this._queue[childIndex1] && func(this._queue[childIndex1])) ||
        (this._queue[childIndex2] && func(this._queue[childIndex2]))
      ) {
        return true;
      }

      index++;
    }
    return false;
  }

  /**
   * Compare parent value and children value and swap them if conditions are satisfied
   * @param index
   */
  private _heapify(index: number) {
    const mid = Math.floor(this._queue.length / 2);
    let childIndex1: number;
    let childIndex2: number;
    let swapIndex: number;

    while (index <= mid - 1) {
      childIndex1 = 2 * index + 1;
      childIndex2 = 2 * index + 2;
      swapIndex = childIndex1;

      if (this._compare(this._queue[childIndex1], this._queue[childIndex2])) {
        swapIndex = childIndex2;
      }

      if (this._compare(this._queue[index], this._queue[swapIndex])) {
        this._swap(index, swapIndex);
      }

      index = swapIndex;
    }
  }

  /**
   * Swap 2 elememts
   * @param index1
   * @param index2
   */
  private _swap(index1: number, index2: number) {
    const temp = this._queue[index1];
    this._queue[index1] = this._queue[index2];
    this._queue[index2] = temp;
  }

  /**
   * Compare 2 elements
   * @param item1
   * @param item2
   */
  private _compare(item1: T, item2: T) {
    if (this._comparator) {
      return this._comparator(item1, item2);
    }
    return item1 < item2;
  }

  /**
   * Get parent's index of the current element
   * @param position
   */
  private _parentOf(position: number) {
    return Math.floor((position - 1) / 2);
  }
}
