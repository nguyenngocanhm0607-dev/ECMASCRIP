function createBook(title, author, year, price) {
    const keyDiscount = "calculateDiscount";
    return {
        title,
        author,
        year,
        price,
        getBookInfo() {
            return `${this.title} - ${this.author} (${this.year}) | Giá: ${this.price.toLocaleString()}đ`;
        },
        [keyDiscount](discount) {
            const finalPrice = this.price - (this.price * discount) / 100;
            return `Giá sau giảm ${discount}%: ${finalPrice.toLocaleString()}đ`;
        },
    };
}
const book = createBook("JavaScript ES6", "John Doe", 2023, 200000);
console.log(book.getBookInfo());
console.log(book.calculateDiscount(10));