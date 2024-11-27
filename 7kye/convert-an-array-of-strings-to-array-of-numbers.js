// DESCRIPTION (ОПИСАНИЕ)
// Some really funny web dev gave you a sequence of numbers from his API response as an sequence of strings!
// You need to cast the whole array to the correct type.
// Create the function that takes as a parameter a sequence of numbers represented as strings and outputs a sequence of numbers.
// ie:["1", "2", "3"] to [1, 2, 3]
// Note that you can receive floats as well.
// Какой-то очень забавный веб-разработчик выдал вам последовательность чисел из своего API-ответа в виде последовательности строк!
// Вам нужно привести весь массив к правильному типу.
// Создайте функцию, которая принимает в качестве параметра последовательность чисел, представленных в виде строк, и выводит последовательность чисел.
// Обратите внимание, что вы можете получать и плавающие значения.

// TESTS 
//  assert.sameOrderedMembers(toNumberArray(["1.1","2.2","3.3"]), [1.1,2.2,3.3])

// SOLUTION (РЕШЕНИЕ)

function toNumberArray(stringarray){
	return stringarray.map(Number)
}

// function toNumberArray(stringarray){
// 	let arr = []
// 	for (let i = 0; i < stringarray.length; i++) {
// 		arr.push(+stringarray[i])
// 	}
// 	return arr
// }

console.log(toNumberArray(["1.1","2.2","3.3"]));
