// DESCRIPTION (ОПИСАНИЕ)
// You are going to be given a non-empty string. Your job is to return the middle character(s) of the string.
// If the string's length is odd, return the middle character.
// If the string's length is even, return the middle 2 characters.
// Вам будет дана непустая строка. Ваша задача - вернуть средний символ (символы) строки.
// Если длина строки нечетная, верните средний символ.
// Если длина строки четная, верните 2 средних символа.

// Examples:
// "test" --> "es"
// "testing" --> "t"
// "middle" --> "dd"
// "A" --> "A"

// TESTS 
// doTest("test", "es");
// doTest("testing", "t");
// doTest("middle", "dd");
// doTest("A", "A");

// SOLUTION (РЕШЕНИЕ)

function getMiddle(s) {
	let middleIndex = s.length / 2;
	if (s.length % 2) {
		// Если он нечетный, мы всегда получаем остаток 1
		return s.charAt(middleIndex);
	} else {
		// иначе строка будет четной
		return s.slice(middleIndex - 1, middleIndex + 1);
	}
}


