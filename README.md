# Priority Queue

A priority queue is a collection in which items can be added at any time, but the only item that can be removed is the one with the highest priority.

For more information, please check [wiki](https://en.wikipedia.org/wiki/Priority_queue).

[![codecov](https://codecov.io/gh/davidnguyen179/priority-queue/branch/master/graph/badge.svg)](https://codecov.io/gh/davidnguyen179/priority-queue) [![Build Status](https://travis-ci.org/davidnguyen179/priority-queue.svg?branch=master)](https://travis-ci.org/davidnguyen179/priority-queue) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/davidnguyen179/priority-queue/pulls) [![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/davidnguyen179/priority-queue/blob/master/LICENSE)

## Motivation

During practising some challenges in `leetcode`. I found this [problem](https://leetcode.com/problems/last-stone-weight/) requires `priority queue`. So I decided to research some documentations online and try to implement by myself this lib. The result beats 97% in `leetcode`.

## Installation

_npm_

```bash
npm i p-queue-ts
```

_yarn_

```bash
yarn add p-queue-ts
```

## Usage

The `priority queue` lib uses max heap as a default way to build a queue.

```ts
import { PriorityQueue } from 'p-queue-ts';
```

**Max priority queue**

_with array of numbers_

```ts
const p = new PriorityQueue();
p.push(2);
p.push(7);
p.push(4);
p.push(1);
p.push(8);
p.push(1);

// The queue: [8, 7, 4, 1, 2, 1]
```

_with array of objects_

```ts
const p = new PriorityQueue(function (a, b) {
  return a.value < b.value;
});

p.push({ text: 'a', value: 2 });
p.push({ text: 'b', value: 7 });
p.push({ text: 'c', value: 4 });
p.push({ text: 'd', value: 1 });
p.push({ text: 'e', value: 8 });
p.push({ text: 'f', value: 1 });

/** The queue
[
  { text: 'e', value: 8 },
  { text: 'b', value: 7 },
  { text: 'c', value: 4 },
  { text: 'd', value: 1 },
  { text: 'a', value: 2 },
  { text: 'f', value: 1 },
]
 */
```

If you want to support min `priority queue`. The lib allows providing the customized `comparator`.

**Min priority queue**

_with array of numbers_

```ts
const p = new PriorityQueue(function (a, b) {
  return a > b;
});
p.push(2);
p.push(7);
p.push(4);
p.push(1);
p.push(8);
p.push(1);

// The queue: [1, 2, 1, 7, 8, 4]
```

_with array of objects_

```ts
const p = new PriorityQueue(function (a, b) {
  return a.value > b.value;
});

p.push({ text: 'a', value: 2 });
p.push({ text: 'b', value: 7 });
p.push({ text: 'c', value: 4 });
p.push({ text: 'd', value: 1 });
p.push({ text: 'e', value: 8 });
p.push({ text: 'f', value: 1 });

/** The queue
[
  { text: 'd', value: 1 },
  { text: 'a', value: 2 },
  { text: 'f', value: 1 },
  { text: 'b', value: 7 },
  { text: 'e', value: 8 },
  { text: 'c', value: 4 }
]
 */
```

## API

### push(value)

Add elements to queue

```ts
const p = new PriorityQueue();
p.push(1); // adding "1" to queue
p.push(2); // adding "2" to queue
p.push(3); // adding "3" to queue

// The queue: [3, 1, 2]
```

### pop

Extract the largest or smallest element from the queue

```ts
const p = new PriorityQueue();
p.push(1); // adding "1" to queue
p.push(2); // adding "2" to queue
p.push(3); // adding "3" to queue

const elmenet = p.pop(); // Output: 3
```

The queue looks like this `[2, 1]`

### top

Peek the element (get the largest or smallest element without removing it from queue)

```ts
const p = new PriorityQueue();
p.push(1); // adding "1" to queue
p.push(2); // adding "2" to queue
p.push(3); // adding "3" to queue

const elmenet = p.pop(); // Output: 3

// The queue is remained the same
```

### size

Get the size of the queue

```ts
const p = new PriorityQueue();
p.push(1); // adding "1" to queue
p.push(2); // adding "2" to queue
p.push(3); // adding "3" to queue
p.push(4); // adding "4" to queue

const length = p.size(); // Output: 4
```

### empty

Check whether the queue is empty or not.

- true: if the queue is empty
- false: if the queue has data

### toArray

Extract queue to array

```ts
const p = new PriorityQueue();
p.push(1); // adding "1" to queue
p.push(2); // adding "2" to queue
p.push(3); // adding "3" to queue

const array = p.toArray(); // Output: [3, 1, 2]
```

## Running time

| Operation | Binary heap |
| --------- | ----------- |
| push      | O(lg n)     |
| top       | O(1)        |
| pop       | O(lg n)     |
