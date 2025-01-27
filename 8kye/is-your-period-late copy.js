// DESCRIPTION (ОПИСАНИЕ)
// Don Drumphet lives in a nice neighborhood, but one of his neighbors has started to let his house go. Don Drumphet wants to build a wall between his house and his neighbor’s, and is trying to get the neighborhood association to pay for it. He begins to solicit his neighbors to petition to get the association to build the wall. Unfortunately for Don Drumphet, he cannot read very well, has a very limited attention span, and can only remember two letters from each of his neighbors’ names. As he collects signatures, he insists that his neighbors keep truncating their names until two letters remain, and he can finally read them.
// Your code will show Full name of the neighbor and the truncated version of the name as an array. If the number of the characters in name is less than or equal to two, it will return an array containing only the name as is.

// Дон Драмфет живет в хорошем районе, но один из его соседей начал сдавать свой дом. Дон Драмфет хочет построить стену между своим и соседским домом и пытается заставить соседскую ассоциацию заплатить за это. Он начинает просить своих соседей подать петицию, чтобы ассоциация построила стену. К несчастью для Дона Драмфета, он не умеет хорошо читать, у него очень ограниченное внимание, и он может запомнить только две буквы из имен своих соседей. Собирая подписи, он настаивает на том, чтобы соседи сокращали свои имена до тех пор, пока не останется две буквы, и он не сможет их прочитать.
// Ваш код выведет в виде массива полное имя соседа и усеченную версию имени. Если количество символов в имени меньше или равно двум, то будет возвращен массив, содержащий только имя как есть.

// TESTS
// assert.deepEqual(whoIsPaying("Mexico"), ["Mexico", "Me"]);
// assert.deepEqual(whoIsPaying("Melania"), ["Melania", "Me"]);
// assert.deepEqual(whoIsPaying("Melissa"), ["Melissa", "Me"]);
// assert.deepEqual(whoIsPaying("Me"), ["Me"]);
// assert.deepEqual(whoIsPaying(""), [""]);
// assert.deepEqual(whoIsPaying("I"), ["I"]);

// SOLUTION (РЕШЕНИЕ)

function whoIsPaying(name) {
    return  name.length <= 2 ? [name] : [name, name.substr(0, 2)]
}
