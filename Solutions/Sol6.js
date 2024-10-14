function curry(fn) {
    return function curried(a) {
        return function(b) {
            return fn(a, b);
        };
    };
}
function add(a, b) {
    return a + b;
}

const curriedAdd = curry(add);


console.log(curriedAdd(2)(3)); 
console.log(curriedAdd(5)(10));
