
//ADD
function add(number1, number2) {
    return number1 + number2
}
// console.log(add(5, 6))



//MULTIPLY
function multiply(a, b) {
    let total = 0
    for (let i = 0; i < b; i++) {
        total = add(total, a)
    }
    return total
}
// console.log(multiply(6, 4))


// Power/Exponentiation
function power(x, n) {
    let total = 1
    for (let counter = 0; counter < n; counter++) {
        total = multiply(x, total)
    }
    return total
}
// console.log(power(2, 3))

function factorial(num) {
    let total = 1
    for (let counter = num; counter > 0; counter = add(counter, -1)) {
        total = multiply(counter, total)
        // console.log(counter)
        console.log(total)
    }
    return total
}
// console.log(factorial(5));

function fibonacci(n)
{
    var a = 0, b = 1, f = 1;
    for(var i = 2; i <= n; i++) {
        f = a + b;
        a = b;
        b = f;
    }
    return f;
};







console.log(fibonacci(8))