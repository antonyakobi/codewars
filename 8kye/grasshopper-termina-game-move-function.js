// DESCRIPTION (ОПИСАНИЕ)
// Terminal game move function
// Функция перемещения в терминальной игре
// In this game, the hero moves from left to right. The player rolls the dice and moves the number of spaces indicated by the dice two times.
// В этой игре герой двигается слева направо. Игрок бросает кубик и перемещается на количество мест, указанное на кубике, два раза.
// Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.
// Создайте функцию для терминальной игры, которая принимает текущую позицию героя и бросок (1-6) и возвращает новую позицию.

// Example: move(3, 6) should equal 15

// TESTS 
// Test.assertEquals(move(0, 4), 8);
// Test.assertEquals(move(3, 6), 15);
// Test.assertEquals(move(2, 5), 12);

// SOLUTION (РЕШЕНИЕ)
function move (position, roll) {
	return position + roll * 2
}

console.log(move(0, 4));
