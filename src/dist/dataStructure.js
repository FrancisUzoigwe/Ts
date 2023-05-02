"use strict";
// const start = (n: number) => {
//     for (let i = 0; i <= n; i++) {
//         console.log(i);
//     }
// }
const start = (n) => {
    let count = 0;
    for (let i = n; i <= 0; i--) {
        // console.log(i);
        count = count + 1;
        console.log(count, i);
    }
    return count;
};
start(3);
