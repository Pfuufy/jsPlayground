// We're going to play around with putting x values in an array of y length

// Lets start with 5 values

// 5 vals in 6 len
// vals = [1, 2, 3, 4, 5]
// newVals = [1, 1, 2, 3, 4, 5]
// Steps:
// 1. Calculate how many nums need to be duplicated (6 - 5 = 1)
// 2. Start at vals[0]
// 3. Duplicate every even index until dupl. nums has been met

// 5 in 7
// vals = [1, 2, 3, 4, 5]
// newVals = [1, 1, 2, 3, 3, 4, 5]
// Steps:
// 1. Calc dupl. nums (7 - 5 = 2)
// 2. Start at vals[0]
// 3. Dupl. every even index until dupl. nums has been met

// 5 in 8
// I wont write everything out, but based on the pattern, 1, 3, and 5 will be dupl.

// 5 in 9
// vals = [1, 2, 3, 4, 5]
// newVals = [1, 1, 2, 2, 3, 3, 4, 5, 5]
// Steps:
// 1. dupl. nums = 4
// 2. Start vals[0]
// 3. Dupl. every even index + 1 odd index (in this case, the first odd index)

// Anything beyond Math.ceil(vals / 2) goes to even dupls (if doind odd dupls)?

// 5 in 10
// vals = [1, 2, 3, 4, 5]
// newVals = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5]

// 2 in 4
// vals = [1, 2]
// newVals = [1, 1, 2, 2]
// Steps:
// 1. dupl. nums = 2
// 2. start vals[0]
// 3. Dupl every even and odd index
// Odd dupls and even dupls are both 1.

// So a pattern has emerged. If the nums to dupl. is less than HALF of vals.length, then you only only duplicate
// even indices. If it is greater than or equal to, then you start to duplicate odd indices too. What happens
// if the num to fill is greater than twice vals.length?

// 2 in 5
// vals = [1, 2]
// newVals = [1, 1, 1, 2, 2]
// Steps:
// 1. dupl. nums = 3
// 2. start vals[0]
// 3. dupl. even indices twice and odd index

// 3 in 8
// vals = [1, 2, 3]
// newVals = [1, 1, 1, 2, 2, 3, 3, 3]
// Steps:
// 1. dupl. nums = 5
// 2. start vals[0]
// 3. dupl. even indices twice and odd index once

function shouldDoOdds(arrLen, totalDupls) {
    if (arrLen % 2 === 0) {
        return totalDupls > (arrLen / 2) ? true : false;
    } else if (arrLen % 2 !== 0) {
        return totalDupls > Math.ceil((arrLen / 2)) ? true : false;
    }
}

function calcEvenOddDupls(totalDupls, arrLen, doOdds) {
    let totalEvenDupls, totalOddDupls;

    if (!doOdds) {
        totalEvenDupls = totalDupls;
        totalOddDupls = 0;
    } else if (doOdds) {
        totalOddDupls = totalDupls - Math.ceil(arrLen / 2)
        totalEvenDupls = totalDupls - totalOddDupls;
    }

    return [totalEvenDupls, totalOddDupls];
}

function expandArr(arr, newArrSize) {
    const newArr = [];
    const arrLen = arr.length;
    const totalDupls = newArrSize - arrLen;
    const doOdds = shouldDoOdds(arrLen, totalDupls);
    const [totalEvenDupls, totalOddDupls] = calcEvenOddDupls(totalDupls, arrLen, doOdds);
    let evensDupld = 0;
    let oddsDupld = 0;

    arr.forEach(
        (num, i) => {
            newArr.push(num);

            if (i % 2 === 0) {
                if (evensDupld < totalEvenDupls) {
                    newArr.push(num);
                    evensDupld++;
                }
            } else if (doOdds && (i % 2 !== 0)) {
                if (oddsDupld < totalOddDupls) {
                    newArr.push(num);
                    oddsDupld++;
                }
            }
        }
    );

    return newArr;
}

const arr3 = [1, 2, 3];
const arr4 = [1, 2, 3, 4];
const arr5 = [1, 2, 3, 4, 5];
const arr6 = [1, 2, 3, 4, 5, 6];
const arr7 = [1, 2, 3, 4, 5, 6, 7];

console.log(expandArr(arr7, 8));