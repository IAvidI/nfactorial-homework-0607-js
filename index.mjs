import {show, is_borowed, borrows} from "./func.mjs";

// BOOKSHELF
const OWNER = "Anon";
const SIGN = `${OWNER}'s book`;

console.log(SIGN);

let borower = "Aibat";

let book = {
  name: "Wind is in the air",
  sign: SIGN,
  borowered: true,
  in_hands: "Aibat",
  bor_time: "07.06.2022",
};

// function is_borowed(book) {
//   if (book.in_hands) {
//     console.log(`Yes`);
//   } else {
//     console.log(`No`);
//   }
// }

is_borowed(book);

// function show(book) {
//   console.log(`"${book.name}" is borowed by ${book.in_hands}`);
// }

show(book);

let authors = ["Lev", "Volk", "Tigr", "Zver"];

authors.push("Abay");

let tigers = authors.filter(author => author === "Tigr");

console.log(tigers);

// function borrows(name, date, ...tigers) {
//   console.log(`${name} borrows ${tigers} from ${date}`);
//   return `${name} borrows ${tigers} from ${date}`
// }

borrows("Aidym", "08.06.2022", tigers);