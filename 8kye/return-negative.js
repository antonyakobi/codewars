// DESCRIPTION (ОПИСАНИЕ)
// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
// В этом простом задании вам дается число, и вы должны сделать его отрицательным. Но, может быть, число уже отрицательное?

// Examples (ПРИМЕРЫ)
// makeNegative(1);    // return -1
// makeNegative(-5);   // return -5
// makeNegative(0);    // return 0
// makeNegative(0.12); // return -0.12

// Notes (ПРИМЕЧАНИЯ)
// The number can be negative already, in which case no change is required.
// Число может быть уже отрицательным, в этом случае изменения не требуются.
// Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.
// Нуль (0) не проверяется на наличие какого-либо конкретного знака. Отрицательные нули не имеют математического смысла.

// TESTS 
// assertEquals(makeNegative(42), -42);

// SOLUTION (РЕШЕНИЕ)
function makeNegative(num) {
    if (num > 0) {
        return -num
    } else {
        return num
    }
}

console.log(makeNegative(0));

