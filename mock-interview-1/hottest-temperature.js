/**
 * You're a climate scientist and you record the hottest temperatures
 * for each state in the US. You're regularly given local temperature data
 * from various states at the county level.
 *
 * Create a function that accepts an object of state temperatures as
 * its first parameter and a record book as its second parameter. This
 * function should return an updated record book with the hottest
 * temperatures for each state.
 *
 * If the record book is missing a state from
 * the temperature data, add that state with that temperature to it.
 *
 * If you are not provided a record book, create one, add the temperatures
 * to it, and return the new record book.
 *
 * Example:
 * const feb2020StateTemps = {
 *  california: 131,
 *  arizona: 145,
 *  alaska: 91,
 *  utah: 111
 * };
 *
 * const recordBook = {
 *  california: 128,
 *  alaska: 95,
 *  colorado: 102,
 *  utah: 105
 * };
 *
 * const result = updateHottestTemperature(feb2020StateTemps, recordBook);
 * // result ===> {
 * //  california: 131,
 * //  alaska: 95,
 * //  colorado: 102,
 * //  utah: 111,
 * //  arizona: 145
 * // }
 */

function updateHottestTemperature(temps, recordBook) {}
