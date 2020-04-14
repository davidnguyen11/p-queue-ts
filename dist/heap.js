"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Heap {
    constructor(array = [], comparator, swapper) {
        this.array = array;
        this.pivot = Math.floor(this.array.length / 2);
        this.comparator = comparator;
        this.swapper = swapper;
    }
    build() {
        for (let i = this.pivot - 1; i >= 0; i--) {
            this.heapify(i);
        }
    }
    heapify(index) {
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
    swap(index1, index2) {
        if (this.swapper) {
            this.swapper(index1, index2);
        }
        else {
            const temp = this.array[index1];
            this.array[index1] = this.array[index2];
            this.array[index2] = temp;
        }
    }
    compare(item1, item2) {
        if (this.comparator) {
            return this.comparator(item1, item2);
        }
        return item1 < item2;
    }
}
exports.Heap = Heap;
