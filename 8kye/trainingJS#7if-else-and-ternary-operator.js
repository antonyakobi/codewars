// DESCRIPTION (ОПИСАНИЕ)
// Complete function saleHotdogs/SaleHotDogs/sale_hotdogs, function accepts 1 parameter:n, n is the number of hotdogs a customer will buy, different numbers have different prices (refer to the following table), return how much money will the customer spend to buy that number of hotdogs.
// Полная функция saleHotdogs/SaleHotDogs/sale_hotdogs, функция принимает 1 параметр:n, n - количество хот-догов, которые купит клиент, разные номера имеют разные цены (см. следующую таблицу), возвращает, сколько денег потратит клиент, чтобы купить это количество хот-догов.

// number of hotdogs	price per unit (cents)
// n < 5				100
// n >= 5 and n < 10	95
// n >= 10				90

// You can use if..else or ternary operator to complete it.
// Для его завершения можно использовать оператор if..else или тернарный оператор.

// TESTS
// assert.strictEqual(saleHotdogs(  1),  100);
// assert.strictEqual(saleHotdogs(  4),  400);
// assert.strictEqual(saleHotdogs(  5),  475);
// assert.strictEqual(saleHotdogs(  9),  855);
// assert.strictEqual(saleHotdogs( 10),  900);
// assert.strictEqual(saleHotdogs(100), 9000);

// SOLUTION (РЕШЕНИЕ)

function saleHotdogs(n) {
  let cost = 0;

  if (n < 5) {
    cost = n * 100;
  } else if (n >= 5 && n < 10) {
    cost = n * 95;
  } else {
    cost = n * 90;
  }
  return cost;
}

// ИЛИ

// function saleHotdogs(n){
//   return n * (n < 5 ? 100 : n < 10 ? 95 : 90);
// }

console.log(saleHotdogs(1));
