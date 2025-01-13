// Numbers ending with zeros are boring.
// They might be fun in your world, but not here.
// Get rid of them. Only the ending ones

// Числа, заканчивающиеся нулями, скучны. В вашем мире они могут быть забавными, но не здесь. Избавьтесь от них. Только конечные единицы

// 1450 -> 145
// 960000 -> 96
// 1050 -> 105
// -1050 -> -105

// Zero alone is fine, don't worry about it. Poor guy anyway
// Ноль один - это хорошо, не беспокойтесь об этом. Бедный парень все равно

// TESTS 
// assert.strictEqual(noBoringZeros(1450), 145)
// assert.strictEqual(noBoringZeros(960000), 96)
// assert.strictEqual(noBoringZeros(1050), 105)
// assert.strictEqual(noBoringZeros(-1050), -105)
// assert.strictEqual(noBoringZeros(-105), -105)
// assert.strictEqual(noBoringZeros(0), 0)

// SOLUTION (РЕШЕНИЕ)

// function noBoringZeros(n) {
//     // Если число равно нулю, просто возвращаем его
//     if (n === 0) {return 0;}
//     // Преобразуем число в строку и отрезаем конечные нули
//     let trimmed = String(n).replace(/0+$/, '');
//     // Преобразуем обратно в число
//     return parseInt(trimmed);
// }

// ИЛИ

// function noBoringZeros(n) {
//     // Проверяем, является ли число нулем
//     if (n === 0) return 0;
//     // Пока число заканчивается на 0, делим его на 10
//     while (n % 10 === 0) {
//         n = Math.floor(n / 10);
//     }
//     return n; // Возвращаем число без конечных нулей
// }

// ИЛИ 

function noBoringZeros(n) {
    while (n % 10 === 0 && n !== 0) {
        n = n / 10
    }
    return n
}

console.log(noBoringZeros(1450));
console.log(noBoringZeros(960000));
console.log(noBoringZeros(1050));
console.log(noBoringZeros(-1050));
console.log(noBoringZeros(-105));
console.log(noBoringZeros(0));




