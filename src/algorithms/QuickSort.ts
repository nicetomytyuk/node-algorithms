import { ISort } from "../interfaces/ISort";

export class QuickSort implements ISort {
    sort(data: number[]): number[] {
       if (data.length  <= 1) return data;
       const pivot = data[data.length - 1];
       const left = data.filter((el, index) => el < pivot && index !== data.length - 1);
       const right = data.filter((el, index) => el >= pivot && index !== data.length - 1);
       return [...this.sort(left), pivot, ...this.sort(right)];
    }
}