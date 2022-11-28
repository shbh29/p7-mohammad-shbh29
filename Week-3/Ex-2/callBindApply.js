const user = {
    fname: "Shubham",
    designation: "JS Developer",
    print() {
        console.log(`${this.fname} works as ${this.designation}`)
    }
};


user.print()

// problem for bind: this context lost for method whem method reference is passed
let methodReference = user.print;
methodReference();

// use bind to pass user object as this context to method.
let methodReferenceWithBind = user.print.bind(user);
methodReferenceWithBind();

//limitation with bind is: method Reference cannot be updated for different this context.
let bindReferenceChange = methodReferenceWithBind.bind({fname: "Imran", designation: "Mentor"});
bindReferenceChange();

// call comes to resuce. With Call you can change the this context.
// Bind hard codes this context and creates another function.
// Whereas, call will call same function with different this context.
methodReference.call({fname: "Jay", designation: "Dev"});
methodReference.call({fname: "Ram", designation: "QA"});

//Apply solves a different kind of problem.
console.log(Math.max(2, 4, 5));
// if this data is in array. It won't be possible to use max function.
let arr = [2, 4, 5];
console.log("output of max function when passed array: ", Math.max(arr));
// when passed array with apply
console.log("when used apply with Max function to pass array: ", Math.max.apply(null, arr));

