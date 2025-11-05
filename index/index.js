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
//Bài 1: Sử dụng property và method shorthand
