//bai1
for (let i = 0; i < 3; i++) {
    setTimeout(function () {
        console.log(i);
    }, 100);
}
//bai2
const student = {
    name: "Ngoc Anh",
    age: 19,
};
student.grade = "A";
student.age = 21;
console.log(student);

//bai3
const user = {
    firstName: "Nguyễn",
    lastName: "Ngọc Ánh",
    product: "Laptop Dell XPS",
    price: 25000000,
    orderDate: "05-11-2025",
};
const emailTemplate = `
     Xin chào, tôi là ${user.firstName}${user.lastName}!
     Thông tin đơn hàng:
     Sản phẩm ${user.product}
     Giá trị: ${user.price}Vnd
     Thời gian: ${user.orderDate}
     Cảm ơn bạn đã mua hàng!
`;
console.log(emailTemplate);
//Bài 4
const product = {
    name: "iPhone 15",
    price: 20000000,
    discount: 10,
    inStock: true,
};
const finalPrice = product.price * (1 - product.discount / 100);
const productCard = `
  <div class="product-card" style="border:1px solid #ccc; padding:15px; width:250px; border-radius:10px;">
    <h2>${product.name}</h2>
    <p>Giá gốc: <del>${product.price.toLocaleString()}đ</del></p>
    <p>Giảm giá: ${product.discount}%</p>
    <p><strong>Giá sau giảm: ${finalPrice.toLocaleString()}đ</strong></p>
    <p>Trạng thái: ${product.inStock ? "Còn hàng" : "Hết hàng"}</p>
  </div>
`;

console.log(productCard);
//Bai5
const width = 100;
const height = 200;
const color = "red";
const rectangle = {
    width,
    height,
    color,
    calculateArea() {
        return this.width * this.height;
    },

    describe() {
        return `Rectangle ${this.width}x${this.height}, color: ${this.color}`;
    },
};

console.log(rectangle.describe());
console.log("Diện tích:", rectangle.calculateArea());