//Array destructuring
//bài1:
function getFirstLast(array) {
    const first = array[0];
    const last = array[array.length - 1];
    return [first, last];
}

console.log(getFirstLast([1, 2, 3, 4]));
// bài2:
function swapElements(arr) {
    const newArr = [...arr];

    [newArr[1], newArr[3]] = [newArr[3], newArr[1]];
    return newArr;
}
console.log(swapElements([1, 2, 3, 4, 5]));

//Object Destructuring
//bài1:
const user = {
    id: 1,
    personalInfo: {
        name: "javascript",
        contact: {
            email: "javascript@email.com",
            phone: "123-456-7890",
        },
    },
};
function getUserInfo(user) {
    const {
        personalInfo: {
            name,
            contact: { email },
        },
    } = user;
    return { name, email };
}
console.log(getUserInfo(user));
//bài2:


//Promises
//bài1:
function delay(ms) {
    return new Promise(function (resolve) {
        setTimeout(resolve, ms);
    });
}

delay(2000).then(function () {
    console.log("Xin chào Ngọc Ánh");
});

//bài2:
