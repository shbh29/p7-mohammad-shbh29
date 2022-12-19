
const {MathOperations} = require('./Ex4');

test("sum", () => {
    let s = MathOperations.sum(2,2);
    expect(s).toBe(4);
});

test("sum negative", () => {
    let s = MathOperations.sum(-1,1)
    expect(s).toBe(0);
});

test("substract negative", () => {
    let s = MathOperations.sub(1, -1);
    expect(s).toBe(2);
})

test("sub to positive", () => {
    let s = MathOperations.sub(-1, 1);
    expect(s).toBe(-2);
});


test("mul negative", () => {
    let s = MathOperations.mul(-2, -2);
    expect(s).toBe(4);
})

test("div by 3", () => {
    let s = MathOperations.div(3, 3);
    expect(s).toBe(1);
});

test("div by zero", () => {
    let s = MathOperations.div(3, 0);
    expect(s).toBe(Infinity);
});

