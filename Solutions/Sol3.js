console.log("Implementing IIFE (Immediately Invoked Function Expression:)");

(function () {
    function square(a) {
        let value = a ** 2;
        return value;
    }
    console.log(square(5));
})();
