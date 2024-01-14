let a = +prompt('nhập cạnh thứ nhất của tam giác')
let b = +prompt('nhập cạnh thứ hai của tam giác')
let c = +prompt('nhập cạnh thứ ba của tam giác')
if(a+b>c&&a+c>b&&b+c>a){
    console.log('đây là một tam giác')
}else{
    console.log('không phải là một tam giác')
}