/**
 * You work at sandwich shop which has a loyalty program.
 * Every 10 sandwich purchases gets a free additional
 * sandwich. At the end of each, you're given a list of
 * eligible loyalty program transactions.
 *
 * Create a function that takes in a list of transactions
 * as well as the current loyalty program record, adds
 * those transactions to the current loyalty program record,
 * and returns the updated record. If your are not given a
 * record, create a new one. Each transaction consists of an
 * account number and a sandwich count for that transaction.
 * Each entry in the record consists of an account number
 * and the total historical sandwich count.
 *
 * Ex:
 * const transactionList = [
 *  ['2398472', 1],
 *  ['9872232', 4],
 *  ['0912311', 2]
 * ];
 *
 * const record = {
 *  '2398472': 16,
 *  '6727277': 1,
 *  '0912311': 3
 * };
 *
 * const result = updateLoyaltyRecord(transactionList, record);
 * // result => {
 * // '2398472': 17,
 * // '6727277': 1,
 * // '0912311': 5,
 * // '9872232': 4
 * // }
 */
