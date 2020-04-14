export interface IHeap {
  build: () => void;
  heapify: (index: number) => void;
};

export interface IPriorityQueue<T> {
  add?: (e: T) => void;
  peek?: () => void;
  poll?: () => void;
  remove?: () => void;
  contains?: () => void;
  size?: () => void;
  clear?: () => void;
}