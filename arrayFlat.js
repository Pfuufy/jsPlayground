const test1 = [1, 2, [3]];
const test2 = [[1], [2], [3]];
const test3 = [1, [2], [[3]], [[[[[4]]]]]];
const test4 = [{one: 1}, [{two: 2}], [[{three: 3}]]];
const test5 = 'hey';
const test6 = [1, [2], [[3]]];


const flatArray = (arr, depth) => {
    let retArr = [];

    console.log(depth);

    const d = depth;

    Array.isArray(arr) && arr.forEach(
        el => {
            if (Array.isArray(el)) {
                if (depth === 0) {
                    retArr = el;
                } else {
                    retArr = retArr.concat(flatArray(el, d - 1));
                }
            } else {
                retArr = retArr.concat(el);
            }
        }
    );

    return retArr;
};
console.log(flatArray(test6));