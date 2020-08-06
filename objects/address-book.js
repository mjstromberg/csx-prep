const peeps = ["Mira", "Royce", "Kathie"];
const streetNumbers = ["123 Fake Street", "345 High Street", "1 Smith Ave."];

// Make a function that takes in an array of names and an array of addresses
// and returns an address book object with names as the keys and addresses
// as the values.
function makeAddressBook(names, addresses) {
  // create address book
  const addressBook = {};
  // get names

  // go through names
  for (let i = 0; i < names.length; i++) {
    // pair names with addresses
    const name = names[i];
    const address = addresses[i];
    // put that pair into AddressBook
    addressBook[name] = address;
  }
  // return address book with names and adresses
  return addressBook;
}

const book = makeAddressBook(peeps, streetNumbers);
// console.log(book);

const royals = ["Jake", "John", "Elizabeth"];
const titles = ["Sir", "Sir", "Queen"];
const ages = [5, 50, 83];

// Make a function that takes in an array of royal names,
// an array of titles, and an array of ages
// and returns an royal address book object with names and title as the keys and addresses
// as the values.
// {
//   "Sir Jake": 5,
//   "Sir John": 50,
//   "Queen Elizabeth": 83
// }
function makeRoyalAddressBook(names, ages, titles) {
  // create royalAddressBook
  const royalAddressBook = {};
  // look up royal names
  // iterate through royal names
  for (let i = 0; i < names.length; i++) {
    // add title prior to name
    // assign age to royal name and title in royalAddressBook
    const royalName = names[i];
    const royalAge = ages[i];
    const royalTitle = titles[i];
    // royalAddressBook[royalTitles + " " + royalNames] = royalAge;
    royalAddressBook[`${royalTitle} ${royalName}`] = royalAge;
  }
  // return royalAddressBook
  return royalAddressBook;
}

const royalBook = makeRoyalAddressBook(royals, ages, titles);
console.log(royalBook); // { SirJake: 5, SirJohn: 50, QueenElizabeth: 83 }
