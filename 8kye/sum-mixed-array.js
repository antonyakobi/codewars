// DESCRIPTION (ОПИСАНИЕ)
// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
// Учитывая массив целых чисел в виде строк и чисел, верните сумму значений массива, как если бы все они были числами.
// Return your answer as a number.
// Верните ответ в виде числа.

// TESTS 
// assert.strictEqual(sumMix([9, 3, '7', '3']), 22);
// assert.strictEqual(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42); 
// assert.strictEqual(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 41);

// SOLUTION (РЕШЕНИЕ)
// function sumMix(x){
//     x = x.map(Number)
    
//     let result = 0
//     for (let i = 0; i < x.length; i++) {
//         result = result + x[i]
//     }
//     return result
// }

// ИЛИ 

// function sumMix(x){
//     return x.map(a => +a).reduce((a, b) => a + b);
// }

// ИЛИ 

function sumMix(x){
    x = x.map(Number)

    return x.reduce((a, b) => a + b)
}

console.log(sumMix([9, 3, '7', '3']));
