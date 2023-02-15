let products = ["New Products1", "New Products2", "New Products 3"];

for (let i = 0; i < products.length; i++) {
    console.log("For", products[i]);
}
//for in
for (let item in products) {
    console.log("For In", products[item]);
}
// for of
for (let item of products) {
    console.log("For Of", item);
}
//ForEach
products.forEach((item, index) => console.log("forEach", `${item} ${index}`));

// map => tao ra 1 mang moi va co the thay doi gia tri
const newMapProducts = products.map((item, index) => {
    return `${item} ${index + 1}`;
})

// filter tao ra 1 mang, loc ra cac phan tu thoa man dieu kien
const newFilterProducts = products.filter((item) => {
    return item != "New Products 3"
})
console.log(newFilterProducts);

// reduce 

// Find 
const newProduct2 = [
    { id: 1, name: "New Products A", price: 100 },
    { id: 2, name: "New Products B", price: 200 },
    { id: 13, name: "New Products C", price: 300 },
];

const foundProduct = product.find((item) => item.id = 2);
console.log(foundProduct);
