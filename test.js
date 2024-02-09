function add(a, b) {
    let c = a++;
    console.log(c, b);
    return c + b;
}

/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    return function() {
        return n++ + add(0, 1);
    };
};

 
const counter = createCounter(10)
console.log(counter()) // 10
console.log(counter()) // 11
counter() // 12
