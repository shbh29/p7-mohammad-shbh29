//input parameter c
//purpose of function is to check if given char is a vowel or not.
// return true or false.
function isVowel(c) {
    return "aeiou".includes(c)
}

function vowelCount(str) {
    const vCount = new Map();
    for(let c of str) {
        c = c.toLowerCase()
        if(isVowel(c)) {
            if(vCount.has(c)) {
                vCount.set(c, vCount.get(c)+1);
            } else {
                vCount.set(c, 1);
            }
        }
    }
    return vCount;
}

console.log(vowelCount("aeioubbbuAA"));