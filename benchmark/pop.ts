import { PriorityQueue } from '../src/index';
import * as chalk from 'chalk';

// ================ ascending =====================
console.log(chalk.green('ascending'));
let p = new PriorityQueue();
for (let i = 0; i < 1000000; i++) {
  p.push(i);
}
console.time('1 million elements');
for (let i = 0; i < 500000; i++) {
  p.pop();
}
console.timeEnd('1 million elements');


p = new PriorityQueue();
for (let i = 0; i < 5000000; i++) {
  p.push(i);
}
console.time('5 million elements');
for (let i = 0; i < 2500000; i++) {
  p.pop();
}
console.timeEnd('5 million elements');


p = new PriorityQueue();
for (let i = 0; i < 10000000; i++) {
  p.push(i);
}
console.time('10 million elements');
for (let i = 0; i < 5000000; i++) {
  p.pop();
}
console.timeEnd('10 million elements');


p = new PriorityQueue();
for (let i = 0; i < 20000000; i++) {
  p.push(i);
}
console.time('20 million elements');
for (let i = 0; i < 1000000; i++) {
  p.pop();
}
console.timeEnd('20 million elements');


p = new PriorityQueue();
for (let i = 0; i < 30000000; i++) {
  p.push(i);
}
console.time('30 million elements');
for (let i = 0; i < 1500000; i++) {
  p.pop();
}
console.timeEnd('30 million elements');


// ================ descending =====================
console.log(chalk.green('descending'));
p = new PriorityQueue();
for (let i = 1000000; i >= 0; i--) {
  p.push(i);
}
console.time('1 million elements');
for (let i = 0; i < 500000; i++) {
  p.pop();
}
console.timeEnd('1 million elements');


p = new PriorityQueue();
for (let i = 5000000; i >= 0; i--) {
  p.push(i);
}
console.time('5 million elements');
for (let i = 0; i < 2500000; i++) {
  p.pop();
}
console.timeEnd('5 million elements');


p = new PriorityQueue();
for (let i = 10000000; i >= 0; i--) {
  p.push(i);
}
console.time('10 million elements');
for (let i = 0; i < 5000000; i++) {
  p.pop();
}
console.timeEnd('10 million elements');


p = new PriorityQueue();
for (let i = 20000000; i >= 0; i--) {
  p.push(i);
}
console.time('20 million elements');
for (let i = 0; i < 1000000; i++) {
  p.pop();
}
console.timeEnd('20 million elements');


p = new PriorityQueue();
for (let i = 30000000; i >= 0; i--) {
  p.push(i);
}
console.time('30 million elements');
for (let i = 0; i < 1500000; i++) {
  p.pop();
}
console.timeEnd('30 million elements');
