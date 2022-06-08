function is_borowed(book) {
    if (book.in_hands) {
    console.log(`Yes`);
    } else {
    console.log(`No`);
    }
}

function show(book) {
    console.log(`"${book.name}" is borowed by ${book.in_hands}`);
}

function borrows(name, date, ...tigers) {
    console.log(`${name} borrows ${tigers} from ${date}`);
    return `${name} borrows ${tigers} from ${date}`
}

export {is_borowed, show, borrows};