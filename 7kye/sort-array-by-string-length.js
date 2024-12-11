// DESCRIPTION (ОПИСАНИЕ)
// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.
// Напишите функцию, которая принимает в качестве аргумента массив строк и возвращает отсортированный массив, содержащий те же строки, упорядоченные от самой короткой до самой длинной.

// Example(Пример):
// Input = ["Telescopes", "Glasses", "Eyes", "Monocles"]
// Output = ["Eyes", "Glasses", "Monocles", "Telescopes"]

// All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.
// Все строки в массиве, переданном в вашу функцию, будут разной длины, поэтому вам не придется решать, как упорядочить несколько строк одинаковой длины.

// TESTS 
// Test.assertDeepEquals(sortByLength(["Beg", "Life", "I", "To"]),["I", "To", "Beg", "Life"]);
// Test.assertDeepEquals(sortByLength(["", "Moderately", "Brains", "Pizza"]),["", "Pizza", "Brains", "Moderately"]);
// Test.assertDeepEquals(sortByLength(["Longer", "Longest", "Short"]),["Short", "Longer", "Longest"]);

// SOLUTION (РЕШЕНИЕ)

function sortByLength (array) {
	return array.sort((a, b) => a.length - b.length);
}

console.log(sortByLength(["Beg", "Life", "I", "To"]));


