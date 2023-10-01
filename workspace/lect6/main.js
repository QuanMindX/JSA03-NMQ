console.log("Hello")


function sosanhvoiso5() {
    let a = prompt("Nhap so a")
    if (a == 5) {
        alert("so a bang 5")
    } else {
        alert("so a ko bang 5")
    }
}

function Iseven(a) {
    if (a % 2 == 0) {
        alert("even")
    } else {
        alert("odd")
    }
}


function Isodd(a) {
    if (a % 2 != 0) {
        alert("odd")
    } else {
        alert("even")
    }
}

function compare(a, b) {
    if (a > b) {
        alert(a + ">" + b)
    } else if (a < b) {
        alert(a + "<" + b)
    } else {
        alert(a + "=" + b)
    }
}

function LeapYear(year) {
    if (year % 400 == 0) {
        alert(year + " leap year")
    } else if (year % 4 == 0 && year % 100 != 0) {
        alert(year + " leap year")
    } else {
        console.log(year + " Is not leap year!")
    }
}