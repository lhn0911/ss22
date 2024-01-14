let a = +prompt('Nhập a');
let b = +prompt('Nhập b');
let c = prompt('Nhập phép tính');

switch (c) {
    case '+':
        console.log(a + b);
        break;
    case '-':
        console.log(a - b);
        break;
    case '*':
        console.log(a * b);
        break;
    case '/':
        if (b !== 0) {
            console.log(a / b);
        } else {
            console.log("Không thể chia cho 0");
        }
        break;
    default:
        console.log("Phép tính không hợp lệ");
}
