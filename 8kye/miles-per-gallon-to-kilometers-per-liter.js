// Sometimes, I want to quickly be able to convert miles per imperial gallon (mpg) into kilometers per liter (kpl).
// Create an application that will display the number of kilometers per liter (output) based on the number of miles per imperial gallon (input).
// Your answer should be accurate within 0.01 kpl.

// Some useful associations relevant to this kata:
// - 1 Imperial Gallon = 4.54609188 litres
// - 1 Mile = 1.609344 kilometres

// Иногда мне нужно быстро перевести мили на имперский галлон (mpg) в километры на литр (kpl).
// Создайте приложение, которое будет отображать количество километров на литр (выход) на основе количества миль на имперский галлон (вход).
// Ваш ответ должен быть точным в пределах 0,01 кпл.


// TESTS 
// assert.closeTo(converter(10), 3.54, 0.01)
// assert.closeTo(converter(20), 7.08, 0.01)
// assert.closeTo(converter(30), 10.62, 0.01)

// SOLUTION (РЕШЕНИЕ)

function converter (mpg) {
	let kilometres = 1.609344
	let litres = 4.54609188
	return +(mpg * kilometres / litres).toFixed(2)
}

console.log(converter(10));
console.log(converter(20));
console.log(converter(30));
