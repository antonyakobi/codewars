// DESCRIPTION (ОПИСАНИЕ)
// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
// Завершите метод, который принимает булево значение и возвращает строку "Да" для true или строку "Нет" для false.

// TESTS 
// assert.strictEqual(boolToWord(true), 'Yes')
// assert.strictEqual(boolToWord(false), 'No')

// SOLUTION (РЕШЕНИЕ)
function boolToWord( bool ){
    return  bool ? 'Yes' : 'No';
}

console.log(boolToWord(false));

