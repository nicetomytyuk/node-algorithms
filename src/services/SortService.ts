import { ISort } from "../interfaces/ISort";

export class SortService {
    private sorter: ISort;

    constructor(sorter: ISort) {
        this.sorter = sorter;
    }

    sort(data: number[]): number[] {
        return this.sorter.sort(data);
    }
}