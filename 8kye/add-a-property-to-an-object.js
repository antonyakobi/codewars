// DESCRIPTION (ОПИСАНИЕ)
// Write a function that adds a named property to an object. It must be possible to set the property to a new value. If the property already exists on the object, and error should be thrown.
// Напишите функцию, которая добавляет именованное свойство к объекту. Должна быть возможность установить свойству новое значение. Если свойство уже существует в объекте, должна возникнуть ошибка.


// TESTS 


// SOLUTION (РЕШЕНИЕ)

const obj = {
	name: "Anton"
}

function addProperty(obj, prop, value) {
	if (obj.hasOwnProperty(prop)) {
		throw Error
	} else {
    obj[prop] = value
	}
return obj
}

// ИЛИ 

// function addProperty(obj, prop, value) {
// 	if(Object.hasOwn(obj, prop)) {
// 		throw new Error("Property already exists!");
// 	} else {
// 		obj[prop] = value;
// 	}
// }

// ИЛИ 

// function addProperty(obj, prop, value) {
// 	for (const prop in obj) {
// 		throw new Error
// 	}
// 	obj[prop] = value;
// }
