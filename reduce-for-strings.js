let arr = ['sat', 'ch', 'num', 'three', 'four'];

let channel = arr.reduce((acc, curr, i, arr) => {

    if (i !== 0) {

        if (i !== arr.length - 1) {
            return acc + curr + ' ';
        }

        return acc + curr;
    }

    return '';
}, '');

channel+='end';

console.log(channel);