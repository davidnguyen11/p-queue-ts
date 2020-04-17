import { PriorityQueue } from '../src/index';
import * as chalk from 'chalk';

// ================ ascending =====================
console.log(chalk.green('ascending'));
console.time('1 million elements');
let p = new PriorityQueue();
for (let i = 0; i < 1000000; i++) {
  p.push(i);
}
console.timeEnd('1 million elements');

console.time('5 million elements');
p = new PriorityQueue();
for (let i = 0; i < 5000000; i++) {
  p.push(i);
}
console.timeEnd('5 million elements');

console.time('10 million elements');
p = new PriorityQueue();
for (let i = 0; i < 10000000; i++) {
  p.push(i);
}
console.timeEnd('10 million elements');

console.time('20 million elements');
p = new PriorityQueue();
for (let i = 0; i < 20000000; i++) {
  p.push(i);
}
console.timeEnd('20 million elements');

console.time('30 million elements');
p = new PriorityQueue();
for (let i = 0; i < 30000000; i++) {
  p.push(i);
}
console.timeEnd('30 million elements');


// ================ descending =====================
console.log(chalk.green('descending'));
console.time('1 million elements');
p = new PriorityQueue();
for (let i = 1000000; i >= 0; i--) {
  p.push(i);
}
console.timeEnd('1 million elements');

console.time('5 million elements');
p = new PriorityQueue();
for (let i = 5000000; i >= 0; i--) {
  p.push(i);
}
console.timeEnd('5 million elements');

console.time('10 million elements');
p = new PriorityQueue();
for (let i = 10000000; i >= 0; i--) {
  p.push(i);
}
console.timeEnd('10 million elements');

console.time('20 million elements');
p = new PriorityQueue();
for (let i = 20000000; i >= 0; i--) {
  p.push(i);
}
console.timeEnd('20 million elements');

console.time('30 million elements');
p = new PriorityQueue();
for (let i = 30000000; i >= 0; i--) {
  p.push(i);
}
console.timeEnd('30 million elements');
