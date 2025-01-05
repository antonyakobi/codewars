// You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all printable ASCII characters.
// Вам будет дана строка, и вы должны вернуть сумму всех символов в виде int. Функция должна быть способна обрабатывать все печатаемые символы ASCII.

// Examples:
// uniTotal("a") == 97
// uniTotal("aaa") == 291

// TESTS 
//   doTest("", 0);
//   doTest("a", 97);
//   doTest("b", 98);
//   doTest("c", 99);
//   doTest("d", 100);
//   doTest("e", 101);
//   doTest("aaa", 291);
//   doTest("Mary Had A Little Lamb", 1873);

// SOLUTION (РЕШЕНИЕ)

function uniTotal (string) {
	let sum = 0; // Инициализируем сумму как 0
    for (let i = 0; i < string.length; i++) { // Проходим по каждому символу в строке
        sum += string.charCodeAt(i); // Получаем код символа и добавляем к общей сумме
    }
    return sum; // Возвращаем итоговую сумму
}

console.log(uniTotal(""));
console.log(uniTotal("a"));
console.log(uniTotal("b"));
console.log(uniTotal("c"));
console.log(uniTotal("d"));
console.log(uniTotal("e"));
console.log(uniTotal("aaa"));
console.log(uniTotal("Mary Had A Little Lamb"));