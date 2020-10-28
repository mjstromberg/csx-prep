/**
 * Using an array method, create a function that accepts
 * a list of credit card bills and an amount. This function
 * should filter out the credit cards that have a balance
 * less than the amount.
 */

const creditCardBills = [
  { number: 1234, brand: "Visa", balance: 500 },
  { number: 0224, brand: "Amex", balance: 0 },
  { number: 1288, brand: "Mastercard", balance: 120 },
  { number: 4400, brand: "Visa", balance: 2000 },
  { number: 2555, brand: "Amex", balance: 1600 },
];

const filterLessThan = (amount, bills) => {
  const filteredBills = bills.filter((bill) => {
    return bill.balance > amount;
  });

  return filteredBills;
};

const result = filterLessThan(400, creditCardBills);
console.log(result);
