// DESCRIPTION (ОПИСАНИЕ)
// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!
// Создайте функцию, которая отвечает на вопрос "Играете ли вы на банджо?". Если ваше имя начинается с буквы "R" или строчной буквы "r", то вы играете на банджо!
// The function takes a name as its only argument, and returns one of the following strings:
// Функция принимает имя в качестве единственного аргумента и возвращает одну из следующих строк:

// name + " plays banjo" 
// name + " does not play banjo"

// Names given are always valid strings.
// Приведенные имена всегда являются допустимыми строками.

// TESTS 
// assert.strictEqual(areYouPlayingBanjo("Adam"), "Adam does not play banjo");
// assert.strictEqual(areYouPlayingBanjo("Paul"), "Paul does not play banjo");
// assert.strictEqual(areYouPlayingBanjo("Ringo"), "Ringo plays banjo");
// assert.strictEqual(areYouPlayingBanjo("bravo"), "bravo does not play banjo");
// assert.strictEqual(areYouPlayingBanjo("rolf"), "rolf plays banjo");

// SOLUTION (РЕШЕНИЕ)

function areYouPlayingBanjo(name) {
	if (name[0] == 'R' || name[0] == 'r') {
		return name + " plays banjo"
	} 
	return name + " does not play banjo";
} 

// Или попробовать так 

// function areYouPlayingBanjo(name) {
// 	if (name[0].toLowerCase() === 'r') {
// 	    return name + ' plays banjo';
// 	} else {
// 	    return name + ' does not play banjo';
// 	}
// }

console.log(areYouPlayingBanjo("Adam"));
console.log(areYouPlayingBanjo("Paul"));
console.log(areYouPlayingBanjo("Ringo"));
console.log(areYouPlayingBanjo("bravo"));
console.log(areYouPlayingBanjo("rolf"));

are-you-playing-banjo