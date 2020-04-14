import { Heap } from './heap';
import { IPriorityQueue, IHeap } from './interface';

export class PriorityQueue<T> implements IPriorityQueue<T> {
  private queue: T[];
  private heap: IHeap;

  constructor(queue: T[] = []) {
    this.queue = queue;

    this.heap = new Heap(this.queue);
  }

  public add(e: T) { }
}
