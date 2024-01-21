let data = [
    {
        productName: "Cappuccino",
        price: "35",
        image: "https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcRqPnxhzG50sOFqBgyKvZtmOHiB3mwkR2YtId5jZG5nApAoiSDkXMK4Rxxqpkfg0ZW9"
    },

    {
        productName: "Espresso",
        price: "34",
        image: "https://www.thespruceeats.com/thmb/HJrjMfXdLGHbgMhnM0fMkDx9XPQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/what-is-espresso-765702-hero-03_cropped-ffbc0c7cf45a46ff846843040c8f370c.jpg"
    },

    {
        productName: "Latte",
        price: "35",
        image: "https://www.foodandwine.com/thmb/CCe2JUHfjCQ44L0YTbCu97ukUzA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Partners-Latte-FT-BLOG0523-09569880de524fe487831d95184495cc.jpg"
    },

    {
        productName: "Americano",
        price: "22",
        image: "https://cdn.tgdd.vn/2021/11/CookDish/americano-la-gi-nguon-goc-cach-pha-americano-don-gian-va-avt-1200x676.jpg"
    },

    {
        productName: "Irish Coffee",
        price: "38",
        image: "https://hips.hearstapps.com/hmg-prod/images/1519246658-irish-coffee-delish-1620163679.jpeg?crop=0.8890666666666666xw:1xh;center,top&resize=1200:*"
    },

    {
        productName: "Vietnamese Coffee",
        price: "42",
        image: "https://tamingofthespoon.com/wp-content/uploads/2020/03/Vietnamese-Iced-Coffee-R1-4.jpg"
    },
]

let product_area = document.getElementById("product-area")



loadProducts()

function loadProducts() {
    for (let i = 0; i < data.length; i++) {
        let output = `
        <div class="col-md-4">
              <div class="card">
                   <div class="card-body">
                      <h5 class="card-title">${data[i].productName}</h5>
                      <img src="${data[i].image}" alt="Avatar" class="image" style="height: 50px;">
                      <a class="btn btn-primary" onclick="addProduct(event)" style="color:White;">Buy Now</a>
                      <p class="card-text"><span>${data[i].price}</span></p>
                    </div>
                </div>
        </div>`
        product_area.innerHTML += output
    }
}



function searchProduct() {
    let search_input = document.getElementById("searchbar").value
    search_input = search_input.toUpperCase()
    let product_titles = document.getElementsByClassName("card-title")
    let products = document.getElementsByClassName("card")

    for (let i = 0; i < products.length; i++) {
        // nếu chữ nằm trong thẻ có class product-titles mà không có chữ nhập vào
        if (!product_titles[i].innerText.includes(search_input)) {
            products[i].classList.add('hide')
        } else {
            products[i].classList.remove('hide')
        }
    }
}

function searchProduct() {
    let search_input = document.getElementById("searchbar").value
    search_input = search_input.toUpperCase()
    let product_titles = document.getElementsByClassName("card-title")
    let products = document.getElementsByClassName("card")

    for (let i = 0; i < products.length; i++) {
        // nếu chữ nằm trong thẻ có class product-titles mà không có chữ nhập vào
        if (!product_titles[i].innerText.includes(search_input)) {
            products[i].classList.add('hide')
        } else {
            products[i].classList.remove('hide')
        }
    }
}

let cartBtn = document.getElementById('cart-btn')
let cartWrapper = document.getElementById('cart-wrapper')
cartBtn.addEventListener("click", () => {
    cartWrapper.classList.toggle("cart-on")
})
let id = 0
let total = 0
let cartBody = document.getElementById('cart-body')
let cartTotal = document.getElementById('total-price')

function addProduct(event) {
    let title = event.target.parentElement.parentElement.childNodes[1].textContent
    let price = event.target.parentElement.childNodes[7].textContent
    id += 1
    total += parseInt(price)

    let output = `
        <tr>
            <td>${id}</td> 
            <td>${title}</td>
            <td>$${price}</td>
        </tr>`

    cartBody.innerHTML += output
    cartTotal.innerHTML = total
}
const navbar = document.getElementById("cart-wrapper");
const sticky1 = navbar.offsetTop;

function myFunction() {
    if (window.scrollY >= sticky1) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}

// When the user scrolls the page, execute myFunction
window.onscroll = function () { myFunction() };

// Get the header
var header = document.getElementById("myHeader");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//     if (window.pageXoffset > sticky) {
//         header.classList.add("sticky");
//     } else {
//         header.classList.remove("sticky");
//     }
// }




