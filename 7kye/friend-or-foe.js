// DESCRIPTION (ОПИСАНИЕ)
// Make a program that filters a list of strings and returns a list with only your friends name in it.
// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...
// Создайте программу, которая фильтрует список строк и возвращает список, содержащий только имена ваших друзей.
// Если в имени ровно 4 буквы, вы можете быть уверены, что это ваш друг! В противном случае вы можете быть уверены, что он не...

// Example(Пример):
// Input = ["Ryan", "Kieran", "Jason", "Yous"] | Output = ["Ryan", "Yous"]
// Input = ["Peter", "Stephen", "Joe"] | Output = []

// Input strings will only contain letters. Note: keep the original order of the names in the output.
// Входные строки будут содержать только буквы. Примечание: сохраните исходный порядок имен в выходных данных.

// TESTS 
// assert.deepEqual(friend(["Ryan", "Kieran", "Mark"]), ["Ryan", "Mark"])
// assert.deepEqual(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]), ["Ryan"])
// assert.deepEqual(friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"]), ["Jimm", "Cari", "aret"])
// assert.deepEqual(friend(["Love", "Your", "Face", "1"]), ["Love", "Your", "Face"])

// SOLUTION (РЕШЕНИЕ)

function friend(friends){
	return friends.filter(friend => friend.length === 4)
}

console.log(friend(["Ryan", "Kieran", "Mark"]));


