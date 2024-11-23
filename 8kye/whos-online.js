// DESCRIPTION (ОПИСАНИЕ)
// You have a group chat application, but who is online!?
// You want to show your users which of their friends are online and available to chat!
// Given an input of an array of objects containing usernames, status and time since last activity (in mins), create a function to work out who is online, offline and away
// If someone is online but their lastActivity was more than 10 minutes ago they are to be considered away.
// У вас есть приложение для группового чата, но кто находится в сети? 
// Вы хотите показать пользователям, кто из их друзей находится в сети и доступен для общения! 
// Получив на вход массив объектов, содержащий имена пользователей, статус и время с момента последней активности (в минутах), создайте функцию, которая будет определять, кто находится в сети, вне сети и вдали. 
// Если кто-то находится в сети, но его последняя активность была более 10 минут назад, он должен считаться вдали.

// The input data has the following structure:
// Входные данные имеют следующую структуру:

// [{
// 	username: 'David',
// 	status: 'online',
// 	lastActivity: 10
// }, {
// 	username: 'Lucy', 
// 	status: 'offline',
// 	lastActivity: 22
// }, {
// 	username: 'Bob', 
// 	status: 'online',
// 	lastActivity: 104
// }]

// The corresponding output should look as follows:
// Соответствующий вывод должен выглядеть следующим образом:

// {
// 	online: ['David'],
// 	offline: ['Lucy'],
// 	away: ['Bob']
// }

// If for example, no users are online the output should look as follows:
// Если, например, ни один пользователь не находится в сети, вывод должен выглядеть следующим образом:
// {
// 	offline: ['Lucy'],
// 	away: ['Bob']
// }

// username will always be a string, status will always be either 'online' or 'offline' (UserStatus enum in C#) and lastActivity will always be number >= 0.
// имя пользователя всегда будет строкой, статус всегда будет либо 'online', либо 'offline' (перечисление UserStatus в C#), а lastActivity всегда будет числом >= 0.

// Finally, if you have no friends in your chat application, the input will be an empty array []. In this case you should return an empty object {} (empty Dictionary in C#).
// Наконец, если в вашем чат-приложении нет друзей, на вход будет передан пустой массив []. В этом случае вы должны вернуть пустой объект {} (пустой словарь в C#).

// TESTS 
// 

// SOLUTION (РЕШЕНИЕ)

const whosOnline = (friends) => {
	const result = {}
	if (friends.length === 0) {
		return result
	} else {
		for (let i = 0; i < friends.length; i++) {
			if (friends[i].status === `offline`) {
				if (result.offline) {
					result.offline.push(friends[i].username)
				} else {
					result.offline = []
					result.offline.push(friends[i].username)
				}
			} else if (friends[i].lastActivity <= 10) {
				if (result.online) {
					result.online.push(friends[i].username)
				} else {
					result.online = []
					result.online.push(friends[i].username)
				}
			} else {
				if (result.away) {
					result.away.push(friends[i].username)
				} else {
					result.away = []
					result.away.push(friends[i].username)
				}
			}
		} 
	} 
	return result
}