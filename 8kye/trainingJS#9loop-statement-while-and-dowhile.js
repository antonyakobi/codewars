// DESCRIPTION (ОПИСАНИЕ)
// Complete function padIt, which accepts 2 parameters:
// 1. str: a string representing the string to pad. We will pad it with "*" symbols on its left side and on its right side.
// 2.  a number indicating how many times to pad the string.
// Завершите функцию padIt, которая принимает 2 параметра:
// 1. str: строка, представляющая собой строку для вставки. Мы будем заполнять ее символами "*" в левой и правой частях.
// 2. n: число, указывающее, сколько раз заполнять строку.

// You need to write a loop statement within the function that loops n times. Each time through the loop it will add one * to str, alternating on which side it is padded: the first time will add a * to the left side of str, the second time will add a * to the right side, and so on.
// Finally, return the padded string.
// Внутри функции нужно написать оператор цикла, который зацикливается n раз. Каждый раз при прохождении цикла он будет добавлять к str одно *, чередуя, с какой стороны оно заполняется: в первый раз * будет добавлено к левой части str, во второй - к правой, и так далее
// Наконец, верните заполненную строку.

// TESTS
// Test.assertSimilar(padIt("a",1),"*a");
// Test.assertSimilar(padIt("a",2),"*a*");
// Test.assertSimilar(padIt("a",3),"**a*");
// Test.assertSimilar(padIt("a",4),"**a**");
// Test.assertSimilar(padIt("a",5),"***a**");

// SOLUTION (РЕШЕНИЕ)

function padIt(str,n){
  let result = str
  let i = 0

  while (i < n) {
    if (i % 2 === 0) {
      result = `*${result}`
    } else {
      result = `${result}*`
    }
    i++
  }
  return result
}

console.log(padIt("a",1))
console.log(padIt("a",2))
console.log(padIt("a",3))
console.log(padIt("a",4))
console.log(padIt("a",5))
