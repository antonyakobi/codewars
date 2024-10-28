// DESCRIPTION (ОПИСАНИЕ)
// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
// Это ката заключается в умножении заданного числа на восемь, если оно четное, и на девять в противном случае.

// TESTS 
// assert.strictEqual(simpleMultiplication(2),16,'Should return given argument times eight...')
// assert.strictEqual(simpleMultiplication(1),9, 'Should return given argument times nine...')
// assert.strictEqual(simpleMultiplication(8),64,'Should return given argument times eight...')
// assert.strictEqual(simpleMultiplication(4),32,'Should return given argument times eight...')
// assert.strictEqual(simpleMultiplication(5),45,'Should return given argument times nine...')

// SOLUTION (РЕШЕНИЕ)

function simpleMultiplication(number) {
    if (number % 2 === 0) {
		return number * 8
	} else {
		return number * 9
	}
}

console.log(simpleMultiplication(4));
