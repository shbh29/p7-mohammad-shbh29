function getNumber() {
    return Math.floor(Math.random() * 100);
}

function getPromise(executionFunction) {
    'use strict';
    const that = {};
    that.thenFunctions = [];
    that.handleError = (x) => { throw new Error(`catch is must: ${x}`)};

    // I made an attempt to demonstrate different states of promise,
    // But, could not print the other states except pending.
    that.exposedObject = {
        state: "<pending>"
    }

    that.exposedObject.then = function(handleResolve) {
        that.thenFunctions.push(handleResolve);
        return that.exposedObject;
    }

    that.exposedObject.catch = function(handleError) {
        that.handleError = handleError;
        return that.exposedObject;
    }

    that.resolve = function(x) {
        that.exposedObject.state = x;
        that.thenFunctions.forEach(thenImpl => {
            x = thenImpl(x);
        });
    }.bind(that);

    that.reject = function(x) {
        that.exposedObject.state = `<rejected> ${x}`;
        that.handleError(x);
    }.bind(that);

    // execute separately so that then and catch parameters are initialized.
    setTimeout(() => executionFunction(that.resolve, that.reject), 0);

    return that.exposedObject;
}

const promise = getPromise((resolve, reject) => {
    let rn = getNumber();
    if (rn % 5 == 0) { reject(rn);}
    else { resolve(rn);}
}).then((rn) => {
    console.log(`Promise resolved - ${rn}`);
    return Math.floor(rn / 5);
}).then((rn) => {
    console.log(`second then - ${rn}`);
}).catch((err) => {
    console.log(err);
});

console.log(promise);
