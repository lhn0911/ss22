let thang = +prompt("Nhập tháng:");
let nam = +prompt("Nhập năm:");

if (thang >= 1 && thang <= 12 && nam > 0) {
    const soNgayTrongThang = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if ((nam % 4 === 0 && nam % 100 !== 0) || (nam % 400 === 0)) {
        soNgayTrongThang[1] = 29;
    }
    console.log(`Số ngày trong tháng ${thang} năm ${nam} là: ${soNgayTrongThang[thang - 1]}`);
} else {
    console.log("Tháng hoặc năm không hợp lệ.");
}
