import { ISort } from "../interfaces/ISort";

export class MergeSort implements ISort {
    sort(data: number[]): number[] {
       if (data.length  <= 1) return data;

       const middle = Math.floor(data.length / 2);
       const left = data.slice(0, middle);
       const right = data.slice(middle);
       
       return this.merge(this.sort(left), this.sort(right));
    }

    private merge(left: number[], right: number[]): number[] {
        let result: number[] = [];

        let leftIndex = 0;
        let rightIndex = 0;

        while (leftIndex < left.length && rightIndex < right.length) {
            if (left[leftIndex] < right[rightIndex]) {
                result.push(left[leftIndex]);
                leftIndex++;
            } else {
                result.push(right[rightIndex]);
                rightIndex++;
            }
        }

        return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
    }
}