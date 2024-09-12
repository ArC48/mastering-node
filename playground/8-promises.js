const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (a != Number(a) || b != Number(b)) {
                reject();
            }
            resolve(a + b);
        }, 2000);
    });
};

// add(1, 2)
//     .then((res) => {
//         console.log(res);
//         add(res, 10)
//             .then((res2) => {
//                 console.log(res2);
//             })
//             .catch((e) => {
//                 console.log(e);
//             });
//     })
//     .catch((e) => {
//         console.log(e);
//     });

// Promise Chaining
add(1, 1)
    .then((sum) => {
        console.log(sum);
        return add(sum, 4);
    })
    .then((sum2) => {
        console.log(sum2);
        return add(sum2, undefined);
    })
    .then((sum3) => {
        console.log(sum3);
    })
    .catch((e) => {
        console.log("Mishv");
    });
