declare module 'p-queue-ts' {
  type Comparator<T> = (a: T, b: T) => boolean;

  export class PriorityQueue<T> {
    constructor(comparator?: Comparator<T>);

    /**
     * Inserts the specified element into this priority queue.
     */
    push: (value: T) => void;
    /**
     * Returns true if this queue contains the specified element.
     */
    contains: (value: T, comparator?: (item: T) => boolean) => boolean;
    /**
     * Retrieves, but does not remove, the head of this queue, or returns null if this queue is empty.
     */
    top: () => T;
    /**
     * Retrieves and removes the head of this queue, or returns null if this queue is empty.
     * Everytime pop element from queue, the queue is started "sift down" to rebuild the heap
     */
    pop: () => T;
    /**
     * Returns the number of elements in this collection.
     */
    size: () => number;
    /**
     * Checks whether the queue is empty.
     */
    empty: () => boolean;
    /**
     * Removes all of the elements from this priority queue.
     */
    clear: () => void;
    /**
     * Returns an array containing all of the elements in this queue.
     */
    toArray: () => T[];
  }
}

