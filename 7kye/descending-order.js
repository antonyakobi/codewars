// DESCRIPTION (ОПИСАНИЕ)
// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
// Ваша задача - создать функцию, которая может принимать в качестве аргумента любое неотрицательное целое число и возвращать его с цифрами в порядке убывания. По сути, нужно переставить цифры так, чтобы получилось максимально возможное число.

// Example(Пример):
// Input: 42145 Output: 54421
// Input: 145263 Output: 654321
// Input: 123456789 Output: 987654321

// TESTS 
// assert.strictEqual(descendingOrder(0), 0)
// assert.strictEqual(descendingOrder(1), 1)
// assert.strictEqual(descendingOrder(111), 111)
// assert.strictEqual(descendingOrder(15), 51)
// assert.strictEqual(descendingOrder(1021), 2110)
// assert.strictEqual(descendingOrder(123456789), 987654321)

// SOLUTION (РЕШЕНИЕ)

function descendingOrder(numbers){
	return +numbers.toString() //Преобразуем число в строку 
	.split('') //затем в массив цифр
	.sort((a, b) => b - a) //Сортируем массив цифр в порядке убывания
	.join('') //Преобразуем обратно в число 
}
// Или вместо «+» написать Number(«внутри код»)


// ИЛИ 

// function descendingOrder(numbers){
// 	return +[...String(numbers)].sort((a, b) => b - a).join('')
// }

console.log(descendingOrder(123456789));


