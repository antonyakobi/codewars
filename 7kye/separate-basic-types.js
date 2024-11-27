// DESCRIPTION (ОПИСАНИЕ)
// Given: a sequence of different type of values (number, string, boolean). You should return an object with a separate properties for each of types presented in input. Each property should contain an array of corresponding values.
// - keep order of values like in input array
// - if type is not presented in input, no corresponding property are expected
// So, for this input(Итак, для этого материала): ['a', 1, 2, false, 'b'] 
// expected output is(Ожидаемый результат):
// {
// 	number: [1, 2],
// 	string: ['a', 'b'],
// 	boolean: [false]
// }
// Дано: последовательность значений разного типа (число, строка, булево). Вы должны вернуть объект с отдельными свойствами для каждого из типов, представленных во входных данных. Каждое свойство должно содержать массив соответствующих значений.
// - сохраните порядок значений, как во входном массиве
// - Если тип не представлен на входе, то не ожидается никаких соответствующих свойств

// TESTS 
// assert.deepEqual(separateTypes(['a', 1, 2, false, 'b']), {number: [1, 2],  string: ['a', 'b'], boolean: [false]});
// assert.deepEqual(separateTypes(['a', 1, 2 ]), {number: [1, 2],  string: ['a']});

// SOLUTION (РЕШЕНИЕ)

function separateTypes(input) {
	const result = {};
	input.forEach(value => {
		const type = typeof value;
		if (!result[type]) {
			result[type] = [];
		}
		result[type].push(value);
	});
	return result;
}

// ИЛИ 

// function separateTypes(input) {
// 	let obj = {};
// 	for (let i = 0; i < input.length; i++) {
// 		let array = [];
// 		obj[typeof input[i]] = array
// 	}
// 	for (let i = 0; i < input.length; i++) {
// 		if (typeof input[i] === 'number') {
// 			obj.number.push(input[i]);
// 		}
// 		if (typeof input[i] === 'string') {
// 			obj.string.push(input[i]);
// 		}
// 		if (typeof input[i] === 'boolean') {
// 			obj.boolean.push(input[i]);
// 		}
// 	}
// 	return obj;
// }

console.log(separateTypes(['a', 1, 2, false, 'b']));



