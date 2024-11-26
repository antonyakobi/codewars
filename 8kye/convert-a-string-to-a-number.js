// DESCRIPTION (ОПИСАНИЕ)
// We need a function that can transform a string into a number. What ways of achieving this do you know?
// Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.
// Нам нужна функция, которая может преобразовать строку в число. Какие способы достижения этой цели вы знаете?
// Примечание: Не волнуйтесь, все входные данные будут строками, а каждая строка - это вполне корректное представление целого числа.

// Examples
// "1234" --> 1234
// "605"  --> 605
// "1405" --> 1405
// "-7" --> -7

// TESTS 
// Test.assertEquals(stringToNumber("1234"),1234)
// Test.assertEquals(stringToNumber("605"), 605)
// Test.assertEquals(stringToNumber("1405"),1405)
// Test.assertEquals(stringToNumber("-7"),  -7)

// SOLUTION (РЕШЕНИЕ)

const stringToNumber = function(str){
	return Number(str);
	// return parseInt(str);
	// return +str;
}

console.log(stringToNumber("1234"));
