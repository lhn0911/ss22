/*giá trị truthy và falsy là khái niệm liên quan đến cách giá trị được đánh giá:
-khi chúng được sử dụng trong ngữ cảnh logic (như trong điều kiện if, while, ...). 
-Giá trị được coi là truthy nếu nó được đánh giá là true trong ngữ cảnh logic và ngược lại
-giá trị falsy nếu nó được đánh giá là false.*/
//vd:
let ktra = +prompt("Nhập một giá trị:");

if (ktra) {
    console.log("Giá trị truthy đã được nhập.");
} else {
    console.log("Giá trị falsy đã được nhập hoặc không có giá trị nào được nhập.");
}
