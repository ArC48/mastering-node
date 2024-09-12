const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (a < 0 || b < 0) {
                return reject("Numbers must be positive!");
            }
            resolve(a + b);
        }, 2000);
    });
};

const doWork = async () => {
    console.log("Waiting for summ");
    const summ = await add(1, 2);

    console.log("Waiting for summ2");
    const summ2 = await add(summ, 10);

    console.log("Waiting for summ3");
    const summ3 = await add(-summ2, 10);

    return summ3;
};

doWork()
    .then((result) => {
        console.log("result: " + result);
    })
    .catch((e) => {
        console.log("Error: " + e);
    });
