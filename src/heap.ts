import { IHeap } from './interface';

export class Heap<T> implements IHeap {
  public array: T[];
  private pivot: number;
  private comparator: (item1: T, item2: T) => boolean;
  private swapper: (index1: number, index2: number) => void;

  constructor(
    array: T[] = [],
    comparator?: (item1: T, item2: T) => boolean,
    swapper?: (index1: number, index2: number) => void
  ) {
    this.array = array;
    this.pivot = Math.floor(this.array.length / 2);
    this.comparator = comparator;
    this.swapper = swapper;
  }

  public build() {
    for (let i = this.pivot - 1; i >= 0; i--) {
      this.heapify(i);
    }
  }

  public heapify(index: number) {
    let childIndex1;
    let childIndex2;

    while (index <= this.pivot - 1) {
      childIndex1 = 2 * index + 1;
      childIndex2 = 2 * index + 2;
      let swapIndex = childIndex1;

      if (this.compare(this.array[childIndex1], this.array[childIndex2])) {
        swapIndex = childIndex2;
      }

      if (this.compare(this.array[index], this.array[swapIndex])) {
        this.swap(index, swapIndex);
      }

      index = swapIndex;
    }
  }

  public swap(index1: number, index2: number) {
    if (this.swapper) {
      this.swapper(index1, index2);
    } else {
      const temp = this.array[index1];
      this.array[index1] = this.array[index2];
      this.array[index2] = temp;
    }
  }

  private compare(item1: T, item2: T) {
    if (this.comparator) {
      return this.comparator(item1, item2);
    }
    return item1 < item2;
  }
}
