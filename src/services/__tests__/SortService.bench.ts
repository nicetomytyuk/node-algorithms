import { bench, describe } from "vitest";
import { BubbleSort, MergeSort, QuickSort } from "../../algorithms";
import { SortService } from "../SortService";

describe("SortService", () => {
    const data = [5, 4, 3, 2, 1];

    bench("BubbleSort bench", () => {
        const sorter = new BubbleSort();
        const service = new SortService(sorter);
        service.sort(data);
    });

    bench("MergeSort bench", () => {
        const sorter = new MergeSort();
        const service = new SortService(sorter);
        service.sort(data);
    });

    bench("QuickSort bench", () => {
        const sorter = new QuickSort();
        const service = new SortService(sorter);
        service.sort(data);
    });
});