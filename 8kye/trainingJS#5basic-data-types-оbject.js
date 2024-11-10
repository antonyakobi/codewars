// DESCRIPTION (ОПИСАНИЕ)
// Give you a function animal, accept 1 parameter:obj like this:
// {name:"dog",legs:4,color:"white"}
// Дайте вам функцию animal, принимающую 1 параметр:obj, например, так:

// and return a string like this:
// и вернуть строку, как показано ниже:
// "This white dog has 4 legs."

// TESTS 
// Test.assertSimilar(animal({name:"dog",legs:4,color:"white"}),"This white dog has 4 legs.");
// Test.assertSimilar(animal({name:"cock",legs:2,color:"red"}),"This red cock has 2 legs.");
// Test.assertSimilar(animal({name:"rabbit",legs:4,color:"gray"}),"This gray rabbit has 4 legs.");

// SOLUTION (РЕШЕНИЕ)
function animal(obj){
	return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`
}

console.log(animal({name:"dog",legs:4,color:"white"}));

