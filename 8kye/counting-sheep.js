// DESCRIPTION (ОПИСАНИЕ)
// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
// Рассмотрим массив/список овец, в котором некоторые овцы могут отсутствовать на своем месте. Нам нужна функция, которая подсчитывает количество овец, присутствующих в массиве (true означает "присутствует").

// For example [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true] 

// The correct answer would be 17
// Правильный ответ - 17

// Hint: Don't forget to check for bad values like null/undefined
// Подсказка: не забудьте проверить на наличие плохих значений, таких как null/undefined

// TESTS 
// [[], 0],
// [[undefined], 0],
// [[null], 0],
// [[false], 0],
// [[true], 1],
// [[undefined,null,false,true], 1],
// [[undefined,null,false,true,true,false,null,undefined], 2],

// SOLUTION (РЕШЕНИЕ)
function countSheeps(sheep) {
	let result = 0 
	for (let i = 0; i < sheep.length; i++) {
		if (sheep[i]) {
			result++
		}
	}
	return result
}

console.log(countSheeps([undefined,null,false,true,true,false,null,undefined]));




