// DESCRIPTION (ОПИСАНИЕ)
// A student was working on a function and made some syntax mistakes while coding. Help them find their mistakes and fix them.

// Студент работал над функцией и допустил несколько синтаксических ошибок при кодировании. Помогите ему найти ошибки и исправить их.

// Example: move(3, 6) should equal 15

// TESTS 
// assert.isFunction(main)
// assert.strictEqual(main('take ', 'item'), 'take item')
// assert.strictEqual(main('use ', 'sword'), 'use sword')

// SOLUTION (РЕШЕНИЕ)
function main (verb, noun){
	return verb + noun
}

console.log(main ('take ', 'item'));
