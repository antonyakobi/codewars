// DESCRIPTION (ОПИСАНИЕ)
// Complete the function howManydays. It accepts 1 parameter month, which means the month of the year. Different months have a different number of days as shown in the table below. Return the number of days that are in month. There is no need for input validation: month will always be greater than 0 and less than or equal to 12.
// Выполните функцию howManydays. Она принимает 1 параметр month, который означает месяц года. Разные месяцы имеют разное количество дней, как показано в таблице ниже. Верните количество дней в месяце. Валидация ввода не требуется: месяц всегда будет больше 0 и меньше или равен 12.

// +---------------+-------------+
// |    month      |    days     |
// +---------------+-------------+
// |1,3,5,7,8,10,12|     31      |
// +---------------+-------------+
// |4,6,9,11       |     30      |
// +---------------+-------------+
// |2              |     28      |  (Do not consider the leap year)
// +---------------+-------------+

// Tip: Using default for most of the cases can reduce your work.
// Совет: Использование стандартных значений для большинства случаев может сократить вашу работу.

// TESTS
// Test.assertSimilar(howManydays(1),31);
// Test.assertSimilar(howManydays(2),28);
// Test.assertSimilar(howManydays(3),31);
// Test.assertSimilar(howManydays(4),30);
// Test.assertSimilar(howManydays(12),31);

// SOLUTION (РЕШЕНИЕ)

function howManydays(month){
  var days;
  switch (month){
    case 2: return 28
    case 4:
    case 6:
    case 9:
    case 11: return 30
  }
  return 31;
}

console.log(howManydays(1));
console.log(howManydays(2));
console.log(howManydays(3));
console.log(howManydays(4));
console.log(howManydays(12));
