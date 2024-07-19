import { BubbleSort, MergeSort, QuickSort } from "./algorithms";
import { ISort } from "./interfaces/ISort";
import { SortService } from "./services/SortService";

import fs from "node:fs/promises";
import path from "path";


const filePath = path.join(__dirname, "data", "data.txt");
async function readCSVToArray(path: string): Promise<number[]> {
    const data = await fs.readFile(path, { encoding: "utf-8" });
    return data.split("\n").map((item) => parseInt(item));
}

async function start() {
    const data = await readCSVToArray(filePath);

    console.log(`Testing sorting algorithms of ${data.length} elements`);

    const measure = (sorter: ISort) => {
        const service = new SortService(sorter);
        const start = performance.now();
        service.sort(data);
        const end = performance.now();
        return end - start;
    };

    const bubble = new BubbleSort();
    const merge = new MergeSort();
    const quick = new QuickSort();

    const bubbleTime = measure(bubble);
    const mergeTime = measure(merge);
    const quickTime = measure(quick);

    console.log(`Testing performance of sorting algorithms of ${data.length} elements`);

    console.log(`BubbleSort: ${bubbleTime}ms`);
    console.log(`MergeSort: ${mergeTime}ms`);
    console.log(`QuickSort: ${quickTime}ms`);
}


start();