// DESCRIPTION (ОПИСАНИЕ)
// Complete the square sum function so that it squares each number passed into it and then sums the results together.
// Дополните функцию квадратной суммы так, чтобы она возводила в квадрат каждое переданное ей число, а затем суммировала результаты.

// For example, for [1, 2, 2] it should return 9 because 

// TESTS 
// assert.strictEqual(squareSum([1,2]), 5);
// assert.strictEqual(squareSum([0, 3, 4, 5]), 50);
// assert.strictEqual(squareSum([]), 0);

// SOLUTION (РЕШЕНИЕ)
function squareSum(numbers){
	let sum = 0
	numbers.forEach(function(n) {
		sum += n * n
	});
	return sum
}

console.log(squareSum([1,2]));


