const name = "Beqa";
const userAge = 23;

const user = {
    name,
    age: userAge,
    location: "Tbilisi",
};

console.log(user);

//  Object destructuring

const product = {
    label: "blue keyboard",
    price: 100,
    stock: 345,
    salePrice: undefined,
};

// const { label: itemLabel, price, rating = "N/A" } = product;

// console.log(itemLabel, price, rating);

const transaction = (type, { label = "no label", stock = 0 } = {}) => {
    console.log(type, label, stock);
};

transaction("order", product);
