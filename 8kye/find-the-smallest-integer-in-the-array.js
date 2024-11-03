// DESCRIPTION (ОПИСАНИЕ)
// Given an array of integers your solution should find the smallest integer.
// В заданном массиве целых чисел ваше решение должно найти наименьшее целое число.

// For example (НАПРИМЕР)
// Given [34, 15, 88, 2] your solution will return 2
// Учитывая [34, 15, 88, 2], ваше решение вернет 2
// Given [34, -345, -1, 100] your solution will return -345
// читывая [34, -345, -1, 100], ваше решение вернет -345

// You can assume, for the purpose of this kata, that the supplied array will not be empty.
// Для целей этого ката вы можете предположить, что предоставленный массив не будет пустым.

// TESTS 
// assert.strictEqual(findSmallestInt([78,56,232,12,8]),8, `findSmallestInt([78,56,232,12,8])`);
// assert.strictEqual(findSmallestInt([78,56,232,12,18]),12, `findSmallestInt([78,56,232,12,18])`);
// assert.strictEqual(findSmallestInt([78,56,232,412,228]),56, `findSmallestInt([78,56,232,412,228])`);
// assert.strictEqual(findSmallestInt([78,56,232,12,0]),0, `findSmallestInt([78,56,232,12,0])`);
// assert.strictEqual(findSmallestInt([1,56,232,12,8]),1, `findSmallestInt([1,56,232,12,8])`);

// SOLUTION (РЕШЕНИЕ)

function findSmallestInt(arr) {
	return Math.min(...arr)
}

// ИЛИ

// function findSmallestInt(arr) {
	
	
// 	return 0
// }


console.log(findSmallestInt([78,56,232,12,8]));


