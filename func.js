let countGroceries = () => groceries.length;
let canBuyProduct = (product) => groceries.includes(product);

// Named export
export { countGroceries, canBuyProduct };

// FUNCTIONS
function countGroceries() {
    return groceries.length;
}

function canBuyProduct(product) {
    return groceries.includes(product);
}

function show(fruit) {
    console.log(`${fruit.name} costs ${fruit.price}tg`);
}

function show(name, price) {
    console.log(`${name} costs ${price}tg`);
}

function show({ name, price }) {xcvcxv
    console.log(`${name} costs ${price}tg`);
}

function show({ name: n, price: p }) {
    console.log(`${n} costs ${p}tg`);
}

