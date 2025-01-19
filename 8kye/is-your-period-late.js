// DESCRIPTION (ОПИСАНИЕ)
// In this kata, we will make a function to test whether a period is late.
// Our function will take three parameters:
// last - The Date object with the date of the last period
// today - The Date object with the date of the check
// cycleLength - Integer representing the length of the cycle in days
// Return true if the number of days passed from last to today is greater than cycleLength. Otherwise, return false.

// В этом кате мы сделаем функцию для проверки того, является ли период поздним. Наша функция будет принимать три параметра: last - объект Date с датой последнего периода today - объект Date с датой проверки cycleLength - целое число, представляющее длину цикла в днях Возвращает true, если количество дней, прошедших от last до today, больше cycleLength. В противном случае возвращается false.

// TESTS
// it("It is not late", () => {assert.isFalse(periodIsLate(new Date(2016, 6, 13), new Date(2016, 7, 16), 35));});
// it("It is late", () => {assert.isTrue(periodIsLate(new Date(2016, 6, 13), new Date(2016, 7, 16), 28));});

// SOLUTION (РЕШЕНИЕ)

function periodIsLate(last, today, cycleLength) {
    const numberDaysLast = last.getTime() / (1000 * 3600 * 24);
    const numberDaysToday = today.getTime() / (1000 * 3600 * 24);
    const diferenceDays = numberDaysToday - numberDaysLast;

    return diferenceDays > cycleLength;
} // ПОД ВОПРОСОМ, ПРОВЕРИТЬ

// ИЛИ

function periodIsLate(last, today, cycleLength) {
    return (today - last) / 86400000 > cycleLength;
}

// ИЛИ

function periodIsLate(last, today, cycleLength) {
    const day = 24 * 60 * 60 * 1000;
    return (today - last) / day > cycleLength;
}
