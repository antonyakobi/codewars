// Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.
// Division by zero should return NaN.
// Напишите функцию, которая принимает два целых числа и возвращает остаток от деления большего значения на меньшее. 
// Деление на ноль должно возвращать NaN.

// Examples:
// n = 17
// m = 5
// result = 2 (remainder of `17 / 5`)

// n = 13
// m = 72
// result = 7 (remainder of `72 / 13`)

// n = 0
// m = -1
// result = 0 (remainder of `0 / -1`)

// n = 0
// m = 1
// result - division by zero (refer to the specifications on how to handle this in your language)

// TESTS 
// assert.strictEqual(remainder(17,5), 2, 'Returned value should be the value left over after dividing as much as possible. For input n = 17, m = 5');
// assert.strictEqual(remainder(13, 72), remainder(72, 13), 'The order the arguments are passed should not matter');
// assert.isNaN(remainder(1, 0), 'Divide by zero should return NaN');
// assert.isNaN(remainder(0, 0), 'Divide by zero should return NaN');

// SOLUTION (РЕШЕНИЕ)

function remainder(n, m) {
    // Определяем большее и меньшее значение
    const larger = Math.max(n, m);
    const smaller = Math.min(n, m);
    
    // Возвращаем остаток от деления большего на меньшее
    return larger % smaller;
}

console.log(remainder(17, 5));
console.log(remainder(13, 72));
console.log(remainder(72, 13));
console.log(remainder(1, 0));
console.log(remainder(0, 0));



