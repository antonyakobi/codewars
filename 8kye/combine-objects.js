// DESCRIPTION (ОПИСАНИЕ)
// Your task is to write a function that takes two or more objects and returns a new object which combines all the input objects.
// All input object properties will have only numeric values. Objects are combined together so that the values of matching keys are added together.
// Ваша задача - написать функцию, которая принимает два или более объектов и возвращает новый объект, объединяющий все входные объекты.
// Все свойства входных объектов будут иметь только числовые значения. Объекты объединяются таким образом, что значения совпадающих ключей складываются.

// An example
// const objA = { a: 10, b: 20, c: 30 }
// const objB = { a: 3, c: 6, d: 3 }
// combine(objA, objB) // Returns { a: 13, b: 20, c: 36, d: 3 }

// The combine function should be a good citizen, so should not mutate the input objects.
// Функция combine должна быть хорошим гражданином, поэтому не должна мутировать входные объекты.

// TESTS 
// const objA = { a: 10, b: 20, c: 30 }
// const objB = { a: 3, c: 6, d: 3 }
// const objC = { a: 5, d: 11, e: 8 }
// const objD = { c: 3 }
// describe('Combine two objects', () => {
//   testDeepEqual(combine(objA, objB), { a: 13, b: 20, c: 36, d: 3 })
//   testDeepEqual(combine(objA, objC), { a: 15, b: 20, c: 30, d: 11, e: 8 })
// })
// describe('Combine three objects', () => {
//   testDeepEqual(combine(objA, objB, objC), { a: 18, b: 20, c: 36, d: 14, e: 8 })
//   testDeepEqual(combine(objA, objC, objD), { a: 15, b: 20, c: 33, d: 11, e: 8 })
// })
// describe('Handle empty objects', () => {
//   testDeepEqual(combine({}, {}, {}), {})
//   testDeepEqual(combine(objA, objC, {}), { a: 15, b: 20, c: 30, d: 11, e: 8 })

// SOLUTION (РЕШЕНИЕ)
const objA = { a: 10, b: 20, c: 30 }
const objB = { a: 3, c: 6, d: 3 }
const objC = { a: 5, d: 11, e: 8 }
const objD = { c: 3 }

function combine(...objects) {
	let resultObj = {}
	for (let i = 0; i < objects.length; i++) {
		for (const key in objects[i]) {
			resultObj[key] = resultObj[key] ? resultObj[key] + objects[i][key] : objects[i][key]
			}
		}
		return resultObj
}	

// Как вариант через аргументы. 

// function combine(){
// 	let argsArray = [...arguments]; // аргументы, которые добавлены в функцию (objA, objB)
// 	let comboObj = {}; // создаем пустой объект, в который добавим новые данные
// 	for(let i = 0; i < arguments.length; i++){
// 	  console.log(arguments[i]) // проходим циклом по двум массивам {a: 10, b: 20, c: 30}
// 	for(let key in arguments[i]){
// 		//console.log(arguments[i][key]) // находим значение ключей объекта
// 		if(!comboObj[key]){
// 		 //console.log(!comboObj[key]) // проверяем наличие ключа в новом объекте
// 		comboObj[key] = arguments[i][key]; // присваиваем значения, которые не дублируются
// 		} else {
// 		  comboObj[key] += arguments[i][key];    // присваиваем значения, которые дублируются
// 		}
// 	}
// 	}
// return comboObj;
// }

// Далее так себе.

// function combine() {
// 	let obj = {}
// 	for (let i = 0; i < arguments.length; i++) {
// 		for (let key in arguments[i]) {
// 			obj[key] = obj[key] ? obj[key] + arguments[i][key] : arguments[i][key]
// 		}
// 	}
// 	return obj;
// }

console.log(combine(objA, objB));
console.log(combine(objA, objB, objC))
console.log(combine(combine({}, {}, {})))
console.log(combine(objA, objC, {}))

