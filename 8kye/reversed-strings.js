// DESCRIPTION (ОПИСАНИЕ)
// Complete the solution so that it reverses the string passed into it.
// Завершите решение так, чтобы оно изменило направление переданной в него строки.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

// TESTS 
// assert.strictEqual(solution('world'), 'dlrow');
// assert.strictEqual(solution('hello'), 'olleh');
// assert.strictEqual(solution(''), '');
// assert.strictEqual(solution('h'), 'h');

// SOLUTION (РЕШЕНИЕ)

function solution(str){
    let result = ''
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    return result
}

// ИЛИ 

// function solution(str){
//     let result = str.split('').reverse().join('')
//     return result
// }

console.log(solution('world'));


