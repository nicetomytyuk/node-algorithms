import { describe, expect, test } from "vitest";
import { QuickSort } from "../QuickSort";

describe("QuickSort", () => {
    test("should sort array in ascending order", () => {
        const sorter = new QuickSort();
        const data = [5, 4, 3, 2, 1];
        const expected = [1, 2, 3, 4, 5];
        expect(sorter.sort(data)).toEqual(expected);
    });

    test("should sort array in descending order", () => {
        const sorter = new QuickSort();
        const data = [1, 2, 3, 4, 5];
        const expected = [5, 4, 3, 2, 1];
        expect(sorter.sort(data, (a, b) => b - a)).toEqual(expected);
    });

    test("should handle empty array", () => {
        const sorter = new QuickSort();
        const data: number[] = [];
        const expected: number[] = [];
        expect(sorter.sort(data)).toEqual(expected);
    });

    test("should handle single element array", () => {
        const sorter = new QuickSort();
        const data = [1];
        const expected = [1];
        expect(sorter.sort(data)).toEqual(expected);
    });

    test("should handle array with duplicate elements", () => {
        const sorter = new QuickSort();
        const data = [3, 3, 2, 1, 2];
        const expected = [1, 2, 2, 3, 3];
        expect(sorter.sort(data)).toEqual(expected);
    });

    test("should handle already sorted array", () => {
        const sorter = new QuickSort();
        const data = [1, 2, 3, 4, 5];
        const expected = [1, 2, 3, 4, 5];
        expect(sorter.sort(data)).toEqual(expected);
    });

    test("should throw error for non-array input", () => {
        const sorter = new QuickSort();
        const data = "not an array";
        expect(() => sorter.sort(data as any)).toThrowError("Input must be an array of numbers");
    });

    test("should throw error for array with non-number elements", () => {
        const sorter = new QuickSort();

        const data = [1, 2, 3, "4", 5];
        expect(() => sorter.sort(data as any)).toThrowError("Array must contain only numbers");
    });
});