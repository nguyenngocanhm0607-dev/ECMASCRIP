
function calculateBMI(weight, height) {
    const bmi = weight / (height * height);
    let print;
    if (bmi < 18.5) {
        print = "Thiếu cân";
    } else if (bmi < 25) {
        print = "Bình thường";
    } else if (bmi < 30) {
        print = "Thừa cân";
    } else {
        print = "Béo phì";
    }
    return `BMI: ${bmi.toFixed(2)} - Phân loại: ${print}`;
}
console.log(calculateBMI(70, 1.75));
