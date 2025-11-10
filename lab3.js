//bai1
// Function 1
const multiply = (a, b) => a * b;

// Function 2
const isPositive = number => number >= 0;

// Function 3
const getRandomNumber = () => Math.random();


//bai2
const createUser = (name = "Ngọc Ánh", age = 18, isAdmin = false) => ({
    name,
    age,
    isAdmin
});

//bai3
const mergeArrays = (...arrays) => {
    return arrays.flat();
};
console.log(mergeArrays([1, 2], [3, 4], [5, 6]));
const sumAll = (...numbers) => {
    return numbers.reduce((total, num) => total + num, 0);
};
console.log(sumAll(1, 2, 3, 4, 5));
const createProduct = ({ name = "Sản phẩm mới", price = 0, category = "Chưa phân loại" } = {}) => {
    return {
        name,
        price,
        category,
        inStock: true,
    };
};

console.log(createProduct({ name: "Áo thun", price: 120000, category: "Thời trang" }));

console.log(createProduct());
//bai4
const shoppingCart = (customerName, ...products) => {
    return {
        customer: customerName,
        items: products,
        totalItems: products.length,
    }

}
const order1 = shoppingCart(
    "Nguyễn Ngọc Ánh",
    "Áo thun",
    "Quần jean",
    "Giày thể thao"
);

console.log(order1);