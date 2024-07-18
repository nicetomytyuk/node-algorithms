import { BubbleSort, MergeSort, QuickSort } from "./algorithms";
import { ISort } from "./interfaces/ISort";
import { SortService } from "./services/SortService";

function start() {
    const data = Array.from({ length: 100000000 }, () => Math.floor(Math.random() * 100000000));

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