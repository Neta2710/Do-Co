// var menu = document.getElementById("navBurger")
var x = 1
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
    if (x == 1) {
       // document.getElementById("navBurger").style.display = "flex";
        document.getElementById("navBurger").style.height = "235px"
        document.getElementById("titleMenu").style.top = "5px"
        x++
    } else {
       // document.getElementById("navBurger").style.display = "none";
       document.getElementById("navBurger").style.height = "0px"
       document.getElementById("titleMenu").style.top = "-210px"
        x--
    }

}

function hideNav () {
    document.getElementById("navBurger").style.height = "0px"
    document.getElementById("titleMenu").style.top = "-210px"

    x = 1
}

function viewFullMenu() {
    document.getElementById("fullMenu").style.display = "flex"
    document.body.style.overflowY= "hidden"
}

function closeMenu() {
    document.getElementById("fullMenu").style.display = "none"
    document.body.style.overflowY= "initial"
}