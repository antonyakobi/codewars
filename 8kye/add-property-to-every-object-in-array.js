// DESCRIPTION (ОПИСАНИЕ)
// Your task is to add a new property usersAnswer to every object in the array questions. The value of usersAnswer should be set to null. The solution should work for array of any length.
// Ваша задача - добавить новое свойство usersAnswer к каждому объекту в массиве questions. Значение usersAnswer должно быть установлено в null. Решение должно работать для массива любой длины.

// For example:
// var questions = [{
//     question: "What's the currency of the USA?",
//     choices: ["US dollar", "Ruble", "Horses", "Gold"],
//     corAnswer: 0
// }, {
//     question: "Where was the American Declaration of Independence signed?",
//     choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
//     corAnswer: 0
// }];

// After adding the property the result should be:
// После добавления свойства результат должен быть таким:
// var questions = [{
//     question: "What's the currency of the USA?",
//     choices: ["US dollar", "Ruble", "Horses", "Gold"],
//     corAnswer: 0,
//     usersAnswer: null
// }, {
//     question: "Where was the American Declaration of Independence signed?",
//     choices: ["Philadelphia", "At the bottom", "Frankie's pub", "China"],
//     corAnswer: 0,
//     usersAnswer: null
// }];

// The questions array is already defined for you and is not the same as the one in the example.
// Массив вопросов уже определен для вас и отличается от приведенного в примере.

// TESTS 
// Test.expect(questions[0].usersAnswer === null)

// SOLUTION (РЕШЕНИЕ)
const questions = [{
    question: "What's the currency of the USA?",
    choices: ["US dollar", "Ruble", "Horses", "Gold"],
    corAnswer: 0
}, {
    question: "Where was the American Declaration of Independence signed?",
    choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
    corAnswer: 0
}];

// 1 ВАРИАНТ

// function addPropObjInArr(array) {
// 	array.forEach(questions => {questions.usersAnswer = null})
// 	return array
// }

// const result = addPropObjInArr(questions)
// console.log(result);

// 2 ВАРИАНТ

// questions.forEach(x => x.usersAnswer = null)

// 3 ВАРИАНТ

// for (i = 0; i < questions.length; i++) {
// 	questions[i].usersAnswer = null;
// };

// 4 ВАРИАНТ

function addPropObjInArr(questions) {
	for (key in questions)
		questions[key].usersAnswer = null;
	return questions
}
// ИЛИ
for (key in questions)
	questions[key].usersAnswer = null;
// 
const result = addPropObjInArr(questions)
console.log(result);