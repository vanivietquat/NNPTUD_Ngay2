function Product(id, name, price, quantity, category, isAvailable) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.category = category;
    this.isAvailable = isAvailable;
}

const products = [
    new Product(1, "Sach 1", 25000000, 5, "Book", true),
    new Product(2, "Sach 2", 32000000, 3, "Book", true),
    new Product(3, "Sach 3", 800000, 20, "Book", true),
    new Product(4, "Sach 4", 1500000, 0, "Book", true),
    new Product(5, "Toy 1", 3500000, 10, "Toy", false),
    new Product(6, "Toy 2", 7000000, 7, "Toy", true)
];

let output = "";

console.log("Cau 3:", products.map(p => ({ name: p.name, price: p.price })));


console.log("Cau 4:", products.filter(p => p.quantity > 0));


console.log("Cau 5:", products.some(p => p.price > 30000000));


console.log(
    "Cau 7: Tong la",
    products.reduce((sum, p) => sum + p.price * p.quantity, 0)
);

console.log(
    "Cau 8:",
    products.map(p => `${p.name} - ${p.category} - ${p.isAvailable}`)
);
output += "\n";

for (const key in products[0]) {
    console.log("Cau 9:", key, "=", products[0][key]);
}

console.log(
    "Cau 10:",
    products.filter(p => p.isAvailable && p.quantity > 0)
            .map(p => p.name)
);


console.log(output);
