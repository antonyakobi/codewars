// DESCRIPTION (ОПИСАНИЕ)
// We need a function that can transform a number (integer) into a string.
// What ways of achieving this do you know?
// Нам нужна функция, которая может преобразовать число (целое) в строку.
// Какие способы достижения этой цели вы знаете?


// Examples (input --> output):
// 123  --> "123"
// 999  --> "999"
// -100 --> "-100"

// SOLUTION (РЕШЕНИЕ)

function numberToString(num) {
	// return String(num)
	// return num.toString()
	return num + ''
}

console.log(numberToString(123));
