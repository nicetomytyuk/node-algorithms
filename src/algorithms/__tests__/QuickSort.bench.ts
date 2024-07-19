import { bench, describe } from "vitest";
import { QuickSort } from "../QuickSort";

describe("QuickSort", () => {
    const data = [5, 4, 3, 2, 1];

    bench("increase", () => {
        const sorter = new QuickSort();
        sorter.sort(data);
    });
})