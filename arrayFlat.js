const test1 = [1, 2, [3]];
const test2 = [[1], [2], [3]];
const test3 = [1, [2], [[3]], [[[[[4]]]]]];
const test4 = [{one: 1}, [{two: 2}], [[{three: 3}]]];
const test5 = 'hey';


function arrayFlat(arr, depth) {
    let retArr = [];

    Array.isArray(arr) && arr.forEach(
        el => {
            if (Array.isArray(el)) {
                if (depth === 0) {
                    retArr = el;
                } else {
                    retArr = retArr.concat(arrayFlat(el, depth - 1));
                }
            } else {
                retArr = retArr.concat(el);
            }
        }
    )

    return retArr;
}

console.log(arrayFlat(test3, 2));