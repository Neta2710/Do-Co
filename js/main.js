// var menu = document.getElementById("navBurger")
var test = 1
// function openMenu() {
//     document.querySelector(".test").style.display = "block"
//     console.log("yes")
//     openClose++;
   
//     check()
// }

// function check() {
//  if (openClose == 2) {
//     console.log("yes2")
//     menu.style.display = "flex !important"
//     openClose--
//  }
//  menu.style.display = "none"
// }


// menu.style.display = "none"

function openMenu() {
    if (test == 1) {
       // document.getElementById("navBurger").style.display = "flex";
        document.getElementById("navBurger").style.height = "215px"
        document.getElementById("titleMenu").style.top = "5px"
        test++
    } else {
       // document.getElementById("navBurger").style.display = "none";
       document.getElementById("navBurger").style.height = "0px"
       document.getElementById("titleMenu").style.top = "-210px"
        test--
    }

}

function hideNav () {
    document.getElementById("navBurger").style.display = "none";
    test--
}