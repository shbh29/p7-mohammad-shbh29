let obj = {
    [Symbol.iterator]() {
        let f1 = 0;
        let f2 = 0;
        let f3 = 1;
        return {
            next() {
                f1 = f2;
                f2 = f3;
                f3 = f1 + f2;
                return {value: f3, done: f3 > 500};
            }
        }
    }
}

for (const e of obj) {
    console.log(e);
}