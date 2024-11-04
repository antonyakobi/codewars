// DESCRIPTION (ОПИСАНИЕ)
// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.
// P.S. Each array includes only integer numbers. Output is a number too.
// Я новичок в кодировании и сейчас я хочу получить сумму двух массивов... Точнее, сумму всех их элементов. Буду благодарен за помощь. 
// P.S. Каждый массив содержит только целые числа. Выходные данные тоже являются числами.

// TESTS 
// assert.strictEqual(arrayPlusArray([1, 2, 3], [4, 5, 6]), 21);
// assert.strictEqual(arrayPlusArray([-1, -2, -3], [-4, -5, -6]), -21);
// assert.strictEqual(arrayPlusArray([0, 0, 0], [4, 5, 6]), 15);
// assert.strictEqual(arrayPlusArray([100, 200, 300], [400, 500, 600]), 2100);

// SOLUTION (РЕШЕНИЕ)

// function arrayPlusArray(arr1, arr2) {
// 	let result = arr1.concat(arr2)
// 	return result.reduce((a, b) => a + b)
// }

// ИЛИ 

function arrayPlusArray(arr1, arr2) {
	let suma=0;
	for(let i=0;i<arr1.length;i++)
		suma += arr1[i];
	for(let i=0;i<arr2.length;i++)
		suma += arr2[i];
	return suma;
}

console.log(arrayPlusArray([-1, -2, -3], [-4, -5, -6]));


