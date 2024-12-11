// DESCRIPTION (ОПИСАНИЕ)
// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
// В этом кате вы создадите функцию, которая принимает список неотрицательных целых чисел и строк и возвращает новый список с отфильтрованными строками.

// Example(Пример):
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

// TESTS 
// assert.deepEqual(filter_list([1,2,'a','b']),[1,2], 'For input [1,2,"a","b"]');
// assert.deepEqual(filter_list([1,'a','b',0,15]),[1,0,15], 'For input [1,"a","b",0,15]');
// assert.deepEqual(filter_list([1,2,'aasf','1','123',123]),[1,2,123], 'For input [1,2,"aasf","1","123",123]');

// SOLUTION (РЕШЕНИЕ)

// function filter_list(arr) {
// 	const result = []

// 	for (let i = 0; i < arr.length; i++) {
// 		if (typeof arr[i] === 'number') {
// 			result.push(arr[i])
// 		}
// 	}
// 	return result
// }

//ИЛИ

// function filter_list(l) {
// 	return l.filter(item => typeof item === 'number')
// }

// ИЛИ 

function filter_list(l) {
	return l.filter(item => Number(item))
}

console.log(filter_list([1,2,'a','b']));


