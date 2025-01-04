// DESCRIPTION (ОПИСАНИЕ)
// You have a quiver of arrows, but some have been damaged. The quiver contains arrows with an optional range information (different types of targets are positioned at different ranges), so each item is an arrow.
// You need to verify that you have some good ones left, in order to prepare for battle:
// anyArrows([{range: 5}, {range: 10, damaged: true}, {damaged: true}])
// If an arrow in the quiver does not have a damaged status, it means it's new.
// The expected result is a boolean, indicating whether you have any good arrows left.

// У вас есть колчан со стрелами, но некоторые из них были повреждены. Колчан содержит стрелы с дополнительной информацией о дальности (разные типы целей располагаются на разных расстояниях), поэтому каждый предмет - это стрела.
// Вам нужно убедиться, что у вас осталось несколько хороших, чтобы подготовиться к битве:
// Если стрела в колчане не имеет статуса поврежденной, значит, она новая
// Ожидаемый результат - логическое число, указывающее, остались ли у вас хорошие стрелки.

// TESTS 
// Test.assertEquals(anyArrows([]), false, "Should handle empty quiver");
// Test.assertEquals(anyArrows([{range: 5}, {range: 10, damaged: true}, {damaged: true}]), true, "Should handle quiver with undamaged arrows");
// Test.assertEquals(anyArrows([{range: 10, damaged: true}, {damaged: true}]), false, "Should handle quiver with damaged arrows");

// SOLUTION (РЕШЕНИЕ)

function anyArrows(arrows){
	return arrows.some(arrows => !arrows.damaged);
}


console.log(anyArrows([]));
console.log(anyArrows([{range: 5}, {range: 10, damaged: true}, {damaged: true}]));
console.log(anyArrows([{range: 10, damaged: true}, {damaged: true}]));
