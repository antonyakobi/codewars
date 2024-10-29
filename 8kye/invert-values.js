// DESCRIPTION (ОПИСАНИЕ)
// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
// Учитывая набор чисел, верните аддитивную обратную величину каждого из них. Все положительные числа становятся отрицательными, а отрицательные - положительными.

// [1, 2, 3, 4, 5] --> [-1, -2, -3, -4, -5]
// [1, -2, 3, -4, 5] --> [-1, 2, -3, 4, -5]
// [] --> []

// TESTS 
// assert.deepEqual(norm(invert([1,2,3,4,5])), [-1,-2,-3,-4,-5]);
// assert.deepEqual(norm(invert([1,-2,3,-4,5])), [-1,2,-3,4,-5]);
// assert.deepEqual(norm(invert([])), []);
// assert.deepEqual(norm(invert([0])), [0]);

// SOLUTION (РЕШЕНИЕ)

// 1 variant
// function invert(array) {
// 	const invertArray = []
// 	for (let index = 0; index < array.length; index++) {
// 		const element = array[index];
// 		if (element === 0) {
// 			invertArray.push(0)
// 		} else {
// 			const invertElement = -element
// 			invertArray.push(invertElement)
// 		}
// 	}
// 	return invertArray
// }

// 2 variant

function invert(array) {
	const invertArray = array.map( (element) => {
		// return element === 0 ? 0 : -element
		if (element === 0) {
			return 0
		} else {
			const invertElement = -element
			return invertElement
		}
	} )
	return invertArray
}

console.log(invert([1,2,3,4,5]));


