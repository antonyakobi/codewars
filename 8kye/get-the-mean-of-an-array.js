// DESCRIPTION (ОПИСАНИЕ)
// t's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.
// Return the average of the given array rounded down to its nearest integer.
// The array will never be empty.
// Это конец учебного года, роковой момент вашего школьного отчета. Необходимо подсчитать средние баллы. Все студенты приходят к вам и просят вычислить для них среднее. Легко! Вам просто нужно написать скрипт. 
// Возвращает среднее значение заданного массива, округленное до ближайшего целого числа. 
// Массив никогда не будет пустым.

// TESTS 
// Test.assertEquals(getAverage([2,2,2,2]),2);
// Test.assertEquals(getAverage([1,2,3,4,5,]),3);
// Test.assertEquals(getAverage([1,1,1,1,1,1,1,2]),1);

// SOLUTION (РЕШЕНИЕ)

// function getAverage(marks){
// 	//TODO : calculate the downward rounded average of the marks array
// 	// вычислить округленное вниз среднее значение массива оценок
// 	let result = 0
// 	for (let i = 0; i < marks.length; i++) {
// 		result += marks[i] / marks.length;
// 	}
// 	return Math.floor(result)
// }

// ИЛИ 

// function getAverage(marks){
// 	let result = 0
// 	for (let i = 0; i < marks.length; i++) {
// 		result += marks[i];
// 	}
// 	return Math.floor(result / marks.length)
// }

// ИЛИ 

function getAverage(marks){
	return Math.floor(marks.reduce((sum, x) => sum + x) / marks.length)
}

console.log(getAverage([1,1,1,1,1,1,1,2]));


