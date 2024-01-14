let a = +prompt('Nhập vào một số');

if (a >= 0) {
    if (Math.sqrt(a) % 1 === 0) {
        console.log('Đây là số chính phương');
    } else {
        console.log('Đây không phải là số chính phương');
    }
} else {
    console.log('Đây không phải là số chính phương vì số nhập vào là số âm');
}
