console.log("hello")

//Dùng DOM lấy giá trị từ ô nhập
let a = document.getElementById("a").value
let b = document.getElementById("b").value
//Code các phép tính (Mỗi phép toán 1.5đ, button bấm được +0.5)
function CanhHuyen() {
    let ketqua1 = (a * a + b * b)
    console.log(ketqua1)
}
let c = (a * a + b * b)
function DuongCao() {
    let ketqua2 = (b * b + c * c / b + c * b + c)
    console.log(ketqua2)
}

function ChuVi() {
    let ketqua3 = (a + b + c)

    console.log(ketqua3)
}
let h = (b * b + c * c / b + c * b + c) 
function DienTich() {
    let ketqua4 = a*h/2
    console.log(ketqua4)
}