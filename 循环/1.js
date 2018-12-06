for (let i = 1; i < 4; i++) {
    if (i == 1) {
        console.log(i);
        break;
    }
    console.log(2);
}

// map forEach无法 跳出循环
let arr = [1, 2, 3, 4];
arr.map(item => {
    if (item == 1) {
        console.log(1);
        return;
    }
    console.log(2);
});

let arr = [1, 2, 3, 4];
arr.forEach(item => {
    if (item == 1) {
        console.log(1);
        return;
    }
    console.log(2);
});
