export interface IPriorityQueue<T> {
  push: (value: T) => void;
  top: () => T;
  pop: () => T;
  size: () => number;
  empty: () => boolean;
  toArray: () => T[];
}
