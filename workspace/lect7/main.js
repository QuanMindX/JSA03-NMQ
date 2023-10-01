let mydiv = document.getElementById("my-div")
// mydiv.classList.add("multi-color")

mydiv.addEventListener("click", function test() {
    mydiv.classList.add("multi-color")
})

let mydiv2 = document.getElementById("my-div2")
mydiv2.addEventListener("mouseover", function enlarge() {
    mydiv2.classList.toggle("my-div2-toggle")
})