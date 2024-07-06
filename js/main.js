let navigation_cercle = document.getElementsByClassName("nav-cercle-container")[0]
let myPage = document.getElementsByClassName("container")[0]
let nav = document.getElementsByTagName("ul")[0]
let home = document.querySelector("li:first-child")
let about = document.querySelector("li:nth-child(2)")
let contact = document.querySelector("li:nth-child(3)")
let body = document.getElementsByTagName("body")[0]

navigation_cercle.addEventListener("click", function() {
    navigation_cercle.classList.toggle("rotated")
    myPage.classList.toggle("rotated-page")
    nav.classList.toggle("slided-nav")
    home.classList.toggle("home-effect")
    about.classList.toggle("about-slide")
    contact.classList.toggle("contact-slide")
    body.classList.toggle("noscroll")
})