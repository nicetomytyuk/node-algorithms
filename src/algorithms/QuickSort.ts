import { ISort } from "../interfaces/ISort";


export class QuickSort implements ISort {
    sort(data: number[]): number[] {
        if (!Array.isArray(data)) {
            throw new Error("Input must be an array of numbers");
        }
        if (data.some(el => typeof el !== 'number' || isNaN(el))) {
            throw new Error("Array must contain only numbers");
        }

        if (data.length <= 1) return data;
        return this.quickSort(data, 0, data.length - 1);
    }

    private quickSort(arr: number[], low: number, high: number): number[] {
        if (low < high) {
            const pi = this.partition(arr, low, high);
            this.quickSort(arr, low, pi - 1);
            this.quickSort(arr, pi + 1, high);
        }
        return arr;
    }

    private partition(arr: number[], low: number, high: number): number {
        const pivot = arr[high];
        let i = low - 1;
        for (let j = low; j < high; j++) {
            if (arr[j] < pivot) {
                i++;
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }
        [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
        return i + 1;
    }
}
