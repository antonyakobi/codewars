// DESCRIPTION (ОПИСАНИЕ)
// The function pickIt accepts 1 parameter, arr, which is an array of numbers. We need to traverse arr by using a for loop. If an element is an odd number, push it to the odd array, and if it's an even number, push it to the evenarray.
// I've defined two arrays odd and even in the function, and also wrote the return statement. Your work is to write a for loop.
// If you forgot how to push an element to an array, please refer to lesson 4.

// Функция pickIt принимает 1 параметр, arr, который представляет собой массив чисел. Нам нужно обойти arr с помощью цикла for. Если элемент является нечетным числом, поместите его в массив нечетных чисел, а если четным - в массив четных чисел.
// В функции я определил два массива odd и even, а также написал оператор return. Ваша задача - написать цикл for.
// Если вы забыли, как вставлять элемент в массив, обратитесь к уроку 4.

// TESTS
// Test.assertSimilar(pickIt([1,2]),[[1],[2]]);
// Test.assertSimilar(pickIt([1,2,3]),[[1,3],[2]]);
// Test.assertSimilar(pickIt([3,2,1]),[[3,1],[2]]);
// Test.assertSimilar(pickIt([10,20,30]),[[],[10,20,30]]);
// Test.assertSimilar(pickIt([11,21,31]),[[11,21,31],[]]);
// Test.assertSimilar(pickIt([8,1,5,4,6,1,1]),[[1,5,1,1],[8,4,6]]);

// SOLUTION (РЕШЕНИЕ)

function pickIt(arr) {
    let odd = [],
        even = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 1) {
            odd.push(arr[i]);
        } else {
            even.push(arr[i]);
        }
    }
    return [odd, even];
}

console.log(pickIt([1, 2]));
console.log(pickIt([1, 2, 3]));
console.log(pickIt([3, 2, 1]));
console.log(pickIt([10, 20, 30]));
console.log(pickIt([11, 21, 31]));
console.log(pickIt([8, 1, 5, 4, 6, 1, 1]));
