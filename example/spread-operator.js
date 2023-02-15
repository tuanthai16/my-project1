// spread operator
const person = {
    ten: "Tuan",
    age: "24",
}

const person2 = {
    ...person,
    name: "Linh",
    diaChi: "Thai Binh",
}
console.log(person2);



const products = [1, 2, 3, 4];

console.log(products);
const newProducts = [-1, ...products, 5];
console.log(newProducts);


