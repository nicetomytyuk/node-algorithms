import { ISort } from "../interfaces/ISort";

export class BubbleSort implements ISort {
    sort(data: number[]): number[] {
        let array = [...data];

        for (let i = 0; i < array.length - 1; i++) {
            for (let j = 0; j < array.length - i - 1; j++) {
                if (array[j] > array[j + 1]) {
                    [array[j], array[j + 1]] = [array[j + 1], array[j]];
                }
            }
        }

        return array;
    }
}