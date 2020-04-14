"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const heap_1 = require("./heap");
const h = new heap_1.Heap([2, 7, 4, 1, 8, 1]);
h.build();
console.log(h.array);
