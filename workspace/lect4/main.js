let footer = document.getElementById("footer");
footer.addEventListener("click", function(){
    window.scrollTo(0, 1000);
})

function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
}