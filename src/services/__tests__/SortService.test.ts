import { describe, expect, test, vi } from "vitest";
import { SortService } from "../SortService";
import { BubbleSort, MergeSort, QuickSort } from "../../algorithms";
import { ISort } from "../../interfaces/ISort";

describe("SortService", () => {
    const data = [5, 4, 3, 2, 1];
    const expected = [1, 2, 3, 4, 5];

    test("should sort array using BubbleSort", () => {
        const sorter = new BubbleSort();
        const service = new SortService(sorter);

        const result = service.sort(data);

        expect(result).toEqual(expected);
    });

    test("should sort array using MergeSort", () => {
        const sorter = new MergeSort();
        const service = new SortService(sorter);

        const result = service.sort(data);
        expect(result).toEqual(expected);
    });

    test("should sort array using QuickSort", () => {
        const sorter = new QuickSort();
        const service = new SortService(sorter);

        const result = service.sort(data);
        expect(result).toEqual(expected);
    });

    test("should throw error for array with non-number elements using QuickSort", () => {
        const sorter = new QuickSort();

        vi.spyOn(sorter, "sort").mockImplementationOnce(() => { throw new Error("Array must contain only numbers") });

        const service = new SortService(sorter);
        expect(() => service.sort([1, 2, 3, "4", 5] as any)).toThrowError("Array must contain only numbers");
    });

    // Or by using an express function

    const testSort = (Sorter: new () => ISort, array: number[]) => {
        test(`should sort array using ${Sorter.name}`, () => {
            const sorter = new Sorter();
            const service = new SortService(sorter);
    
            const result = service.sort(array);
            expect(result).toEqual(expected);
        }); 
    }

    testSort(BubbleSort, data);
    testSort(MergeSort, data);
    testSort(QuickSort, data);

});