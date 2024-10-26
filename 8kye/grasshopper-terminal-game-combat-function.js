// DESCRIPTION (ОПИСАНИЕ)
// Create a combat function that takes the player's current health and the amount of damage received, and returns the player's new health. Health can't be less than 0.
// Создайте боевую функцию, которая принимает текущее здоровье игрока и количество полученного урона и возвращает новое здоровье игрока. Здоровье не может быть меньше 0.

// TESTS 
// Test.assertEquals(combat(100, 5), 95);
// Test.assertEquals(combat(92, 8), 84);
// Test.assertEquals(combat(20, 30), 0, "Health cannot go below 0");

// SOLUTION (РЕШЕНИЕ)
// function combat(health, damage) {
//     if (damage > health) {
//         health = 0
//         console.log(`${health} + "Health cannot go below 0"`);
//         return health
//     } else {
//         health = health - damage
//         return health
//     }
// }

// или 

function combat(health, damage) {
	return health < damage ? 0 : health - damage
} 

console.log(combat(100, 5));
