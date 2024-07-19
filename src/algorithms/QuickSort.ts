import { ISort } from "../interfaces/ISort";
import { Comparator } from "../types/Comparator";


export class QuickSort implements ISort {
    sort(data: number[], comparator: Comparator<number> = QuickSort.defaultComparator): number[] {
        if (!Array.isArray(data)) {
            throw new Error("Input must be an array of numbers");
        }
        if (data.some(el => typeof el !== 'number' || isNaN(el))) {
            throw new Error("Array must contain only numbers");
        }

        if (data.length <= 1) return data;
        return this.quickSort(data, 0, data.length - 1, comparator);
    }

    private quickSort(arr: number[], low: number, high: number, comparator: Comparator<number>): number[] {
        if (low < high) {
            const pi = this.partition(arr, low, high, comparator);
            this.quickSort(arr, low, pi - 1, comparator);
            this.quickSort(arr, pi + 1, high, comparator);
        }
        return arr;
    }

    private partition(arr: number[], low: number, high: number, comparator: Comparator<number>): number {
        const pivotIndex = this.randomPivot(low, high);
        const pivot = arr[pivotIndex];
        [arr[pivotIndex], arr[high]] = [arr[high], arr[pivotIndex]];

        let i = low - 1;
        for (let j = low; j < high; j++) {
            if (comparator(arr[j], pivot) < 0) {
                i++;
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }
        [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
        return i + 1;
    }

    private randomPivot(low: number, high: number): number {
        return Math.floor(Math.random() * (high - low + 1)) + low;
    }

    private static defaultComparator(a: number, b: number): number {
        return a - b;
    }
}
