import { IPriorityQueue } from "../typing/priority-queue";

export class PriorityQueue<T> implements IPriorityQueue<T> {
  private queue: T[];
  private comparator: (item1: T, item2: T) => boolean;
  private swapper: (index1: number, index2: number) => void;

  constructor(
    queue: T[] = [],
    comparator?: (item1: T, item2: T) => boolean,
    swapper?: (index1: number, index2: number) => void
  ) {
    this.queue = queue;
    this.comparator = comparator;
    this.swapper = swapper;

    if (this.queue.length > 0) {
      this._build();
    }
  }

  /**
   * Inserts the specified element into this priority queue.
   * @param value
   */
  public push(value: T) {
    this.queue.push(value);
    let i = this.queue.length - 1;

    while (
      i != 0 &&
      this._compare(this.queue[this._parentOf(i)], this.queue[i])
    ) {
      this._swap(i, this._parentOf(i));
      i = this._parentOf(i);
    }
  }

  /**
   * Retrieves, but does not remove, the head of this queue, or returns null if this queue is empty.
   */
  public top() {
    return this.queue.length > 0 ? this.queue[0] : null;
  }

  /**
   * Retrieves and removes the head of this queue, or returns null if this queue is empty.
   */
  public pop() {
    if (this.queue.length === 0) {
      return null;
    }

    const item = this.queue[0];
    this.queue[0] = this.queue[this.queue.length - 1];
    this._swap(0, this.queue.length - 1);
    this.queue.pop();
    this._heapify(0);
    return item;
  }

  /**
   * Returns the number of elements in this collection.
   */
  public size() {
    return this.queue.length;
  }

  /**
   * Checks whether the queue is empty.
   */
  public empty() {
    return this.queue.length === 0;
  }

  /**
   * Returns an array containing all of the elements in this queue.
   */
  public toArray() {
    return [...this.queue];
  }

  /**
   * Build min or max heap
   */
  private _build() {
    const mid = Math.floor(this.queue.length / 2);
    for (let i = mid - 1; i >= 0; i--) {
      this._heapify(i);
    }
  }

  /**
   * Compare parent value and children value and swap them if conditions are satisfied
   * @param index
   */
  private _heapify(index: number) {
    const mid = Math.floor(this.queue.length / 2);
    let childIndex1;
    let childIndex2;
    let swapIndex;

    while (index <= mid - 1) {
      childIndex1 = 2 * index + 1;
      childIndex2 = 2 * index + 2;
      swapIndex = childIndex1;

      if (this._compare(this.queue[childIndex1], this.queue[childIndex2])) {
        swapIndex = childIndex2;
      }

      if (this._compare(this.queue[index], this.queue[swapIndex])) {
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
    if (this.swapper) {
      this.swapper(index1, index2);
    } else {
      const temp = this.queue[index1];
      this.queue[index1] = this.queue[index2];
      this.queue[index2] = temp;
    }
  }

  /**
   * Compare 2 elements
   * @param item1
   * @param item2
   */
  private _compare(item1: T, item2: T) {
    if (this.comparator) {
      return this.comparator(item1, item2);
    }
    return item1 < item2;
  }

  /**
   * Get parent's index of the current element
   * @param i
   */
  private _parentOf(i: number) {
    return Math.floor((i - 1) / 2);
  }
}
