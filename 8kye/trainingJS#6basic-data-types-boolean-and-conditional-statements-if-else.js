// DESCRIPTION (ОПИСАНИЕ)
// Coding in function trueOrFalse, function accept 1 parameters:val, try to use the conditional statement if...else, if val value is false (val==false or it can convert to false), should return a string "false", if not, return a string "true".
// Кодировка в функции trueOrFalse, функция принимает 1 параметр:val, попробуйте использовать условный оператор if...else, если значение val ложно (val==false или может преобразоваться в false), должна возвращаться строка "false", если нет, возвращается строка "true".



// TESTS 
// //test for equations and inequalities
// var a=1,b=2,c=1;
// Test.assertSimilar(trueOrFalse(a>b),"false");
// Test.assertSimilar(trueOrFalse(a===b),"false");
// Test.assertSimilar(trueOrFalse(a<b),"true");
// Test.assertSimilar(trueOrFalse(a!==b),"true");
// Test.assertSimilar(trueOrFalse(b>c),"true");
// Test.assertSimilar(trueOrFalse(b===c),"false");
// Test.assertSimilar(trueOrFalse(b<c),"false");
// Test.assertSimilar(trueOrFalse(b!==c),"true");
// Test.assertSimilar(trueOrFalse(a===c),"true");
// Test.assertSimilar(trueOrFalse(a!==c),"false");
// //test for logical operators and bitwise operators
// var t=true,f=false;
// Test.assertSimilar(trueOrFalse(t&&f),"false");
// Test.assertSimilar(trueOrFalse(f&&f),"false");
// Test.assertSimilar(trueOrFalse(t&&t),"true");
// Test.assertSimilar(trueOrFalse(t||f),"true");
// Test.assertSimilar(trueOrFalse(t||t),"true");
// Test.assertSimilar(trueOrFalse(f||f),"false");
// Test.assertSimilar(trueOrFalse(t&f),"false");
// Test.assertSimilar(trueOrFalse(t&t),"true");
// Test.assertSimilar(trueOrFalse(f&f),"false");
// Test.assertSimilar(trueOrFalse(t|f),"true");
// Test.assertSimilar(trueOrFalse(t|t),"true");
// Test.assertSimilar(trueOrFalse(f|f),"false");
// Test.assertSimilar(trueOrFalse(!t),"false");
// Test.assertSimilar(trueOrFalse(!f),"true");
// Test.assertSimilar(trueOrFalse(t^f),"true");
// Test.assertSimilar(trueOrFalse(t^t),"false");
// Test.assertSimilar(trueOrFalse(f^f),"false");
// //test for implicit conversion 
// Test.assertSimilar(trueOrFalse(true),"true");
// Test.assertSimilar(trueOrFalse(123),"true");
// Test.assertSimilar(trueOrFalse("123"),"true");
// Test.assertSimilar(trueOrFalse(["123"]),"true");
// Test.assertSimilar(trueOrFalse("false"),"true");
// Test.assertSimilar(trueOrFalse(false),"false");
// Test.assertSimilar(trueOrFalse(0),"false");
// Test.assertSimilar(trueOrFalse(""),"false");
// Test.assertSimilar(trueOrFalse(null),"false");
// Test.assertSimilar(trueOrFalse([].length),"false");
// Test.assertSimilar(trueOrFalse(undefined),"false");

// SOLUTION (РЕШЕНИЕ)
function trueOrFalse(val){
	if (val)    return "true";             
	else     return "false";
}

// ИЛИ 

// function trueOrFalse(val){
// 	return val ? true : false;             
// }

// ИЛИ

// function trueOrFalse(val){
// 	if (val === false || val === 0 || val === -0 || val === "" 
// 	|| val === null || val === undefined || val === NaN){
// 	    return false;
// 	}
// 	else{
// 	    return true;
// 	}
// }

// ИЛИ

// function trueOrFalse(val){
// 	return !val ? 'false':'true'
// }

console.log(trueOrFalse(2>1));
console.log(trueOrFalse(true&&false));
console.log(trueOrFalse(123));
