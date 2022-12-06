function getNumber() {
    return Math.floor(Math.random() * 100);
}


class MyPromise {
    constructor(executionFunction){
        this.thenFunctions = [];
        this.handleError = () => {};

        this.resolve = this.resolve.bind(this);
        this.reject = this.reject.bind(this);
        setTimeout(() => executionFunction(this.resolve, this.reject), 0);
    }
    then(handleResolve) {
        this.thenFunctions.push(handleResolve);
        
        return this;
    }
    resolve(x) {
        this.thenFunctions.forEach(thenImpl => {
            x = thenImpl(x);
        });
    }
    reject(x) {
        throw new Error(x);
    }
    catch(handleError) {
        this.handleError = handleError;

        return this;
    }
}


new MyPromise((resolve, reject) => {
    let rn = getNumber();
    if (rn % 5 == 0) { reject(new Error(`promise rejected: ${rn}`));}
    else { resolve(rn);}
}).then((rn) => {
    console.log(`Promise resolved - ${rn}`);
    return Math.floor(rn / 5);
}).then((rn) => {
    console.log(`second then - ${rn}`);
}).catch((err) => console.log(err));