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
        document.getElementById("navBurger").style.height = "275px"
        document.getElementById("titleMenu").style.top = "0px"
        x++
    } else {
       // document.getElementById("navBurger").style.display = "none";
       document.getElementById("navBurger").style.height = "0px"
       document.getElementById("titleMenu").style.top = "-245px"
        x--
    }

}

function hideNav () {
    document.getElementById("navBurger").style.height = "0px"
    document.getElementById("titleMenu").style.top = "-245px"

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


var a = 0
var b = 0
var c = 0
var d = 0
var e = 0
var f = 0
function seeText() {
    if (screen.width <= 425){
        if(a == 0) {
            document.getElementById("1Arrow").style.transform = "rotate(180deg)";
            document.getElementById("iconArrow1").style.top = "-244px"
            document.getElementById("img1").style.opacity ="0.9"
            setTimeout(() => {
                document.getElementById("text1").style.display = "flex"
            }, 220);
            a++
        }
        else {
            document.getElementById("1Arrow").style.transform = "rotate(0deg)"
            document.getElementById("text1").style.display = "none";
            document.getElementById("iconArrow1").style.top = "-10px";
            document.getElementById("img1").style.opacity ="1"
            a--
        }
    } else {
        if(a == 0) {
            document.getElementById("1Arrow").style.transform = "rotate(180deg)";
            document.getElementById("iconArrow1").style.top = "-234px"
            document.getElementById("img1").style.opacity ="0.9"
            setTimeout(() => {
                document.getElementById("text1").style.display = "flex"
            }, 220);
            a++
        }
        else {
            document.getElementById("1Arrow").style.transform = "rotate(0deg)"
            document.getElementById("text1").style.display = "none";
            document.getElementById("iconArrow1").style.top = "-10px";
            document.getElementById("img1").style.opacity ="1"
            a--
        }
    }
    
}
function seeText2() {
    if (screen.width <= 425){
    if(b == 0) {
        document.getElementById("2Arrow").style.transform = "rotate(180deg)";
        document.getElementById("iconArrow2").style.top = "-194px"
        document.getElementById("img2").style.opacity ="0.9"
        setTimeout(() => {
            document.getElementById("text2").style.display = "flex"
        }, 220);
        b++
    }
    else {
        document.getElementById("2Arrow").style.transform = "rotate(0deg)"
        document.getElementById("text2").style.display = "none";
        document.getElementById("iconArrow2").style.top = "-10px";
        document.getElementById("img2").style.opacity ="1"
        b--
    }
} else {
    if(b == 0) {
        document.getElementById("2Arrow").style.transform = "rotate(180deg)";
        document.getElementById("iconArrow2").style.top = "-187px"
        document.getElementById("img2").style.opacity ="0.9"
        setTimeout(() => {
            document.getElementById("text2").style.display = "flex"
        }, 220);
        b++
    }
    else {
        document.getElementById("2Arrow").style.transform = "rotate(0deg)"
        document.getElementById("text2").style.display = "none";
        document.getElementById("iconArrow2").style.top = "-10px";
        document.getElementById("img2").style.opacity ="1"
        b--
    }  
}
}
function seeText3() {
    if (screen.width <= 425) {
    if(c == 0) {
        document.getElementById("3Arrow").style.transform = "rotate(180deg)";
        document.getElementById("iconArrow3").style.top = "-194px"
        document.getElementById("img3").style.opacity ="0.9"
        setTimeout(() => {
            document.getElementById("text3").style.display = "flex"
        }, 220);
        c++
    }
    else {
        document.getElementById("3Arrow").style.transform = "rotate(0deg)"
        document.getElementById("text3").style.display = "none";
        document.getElementById("iconArrow3").style.top = "-10px";
        document.getElementById("img3").style.opacity ="1"
        c--
    }
} else { if(c == 0) {
    document.getElementById("3Arrow").style.transform = "rotate(180deg)";
    document.getElementById("iconArrow3").style.top = "-187px"
    document.getElementById("img3").style.opacity ="0.9"
    setTimeout(() => {
        document.getElementById("text3").style.display = "flex"
    }, 220);
    c++
}
else {
    document.getElementById("3Arrow").style.transform = "rotate(0deg)"
    document.getElementById("text3").style.display = "none";
    document.getElementById("iconArrow3").style.top = "-10px";
    document.getElementById("img3").style.opacity ="1"
    c--
}}
}
function seeText4() {
    if (screen.width <= 425) {
    if(d == 0) {
        document.getElementById("4Arrow").style.transform = "rotate(180deg)";
        document.getElementById("iconArrow4").style.top = "-169px"
        document.getElementById("img4").style.opacity ="0.9"
        setTimeout(() => {
            document.getElementById("text4").style.display = "flex"
        }, 220);
        d++
    }
    else {
        document.getElementById("4Arrow").style.transform = "rotate(0deg)"
        document.getElementById("text4").style.display = "none";
        document.getElementById("iconArrow4").style.top = "-10px";
        document.getElementById("img4").style.opacity ="1"
        d--
    }
} else { if(d == 0) {
    document.getElementById("4Arrow").style.transform = "rotate(180deg)";
    document.getElementById("iconArrow4").style.top = "-164px"
    document.getElementById("img4").style.opacity ="0.9"
    setTimeout(() => {
        document.getElementById("text4").style.display = "flex"
    }, 220);
    d++
}
else {
    document.getElementById("4Arrow").style.transform = "rotate(0deg)"
    document.getElementById("text4").style.display = "none";
    document.getElementById("iconArrow4").style.top = "-10px";
    document.getElementById("img4").style.opacity ="1"
    d--
}}
}
function seeText5() {
    if (screen.width <= 425) {
    if(e == 0) {
        document.getElementById("5Arrow").style.transform = "rotate(180deg)";
        document.getElementById("iconArrow5").style.top = "-244px"
        document.getElementById("img5").style.opacity ="0.9"
        setTimeout(() => {
            document.getElementById("text5").style.display = "flex"
        }, 220);
        e++
    }
    else {
        document.getElementById("5Arrow").style.transform = "rotate(0deg)"
        document.getElementById("text5").style.display = "none";
        document.getElementById("iconArrow5").style.top = "-10px";
        document.getElementById("img5").style.opacity ="1"
        e--
    }
} else {
    if(e == 0) {
        document.getElementById("5Arrow").style.transform = "rotate(180deg)";
        document.getElementById("iconArrow5").style.top = "-234px"
        document.getElementById("img5").style.opacity ="0.9"
        setTimeout(() => {
            document.getElementById("text5").style.display = "flex"
        }, 220);
        e++
    }
    else {
        document.getElementById("5Arrow").style.transform = "rotate(0deg)"
        document.getElementById("text5").style.display = "none";
        document.getElementById("iconArrow5").style.top = "-10px";
        document.getElementById("img5").style.opacity ="1"
        e--
    }
}
}
function seeText6() {
    if (screen.width <= 425) {
    if(f == 0) {
        document.getElementById("6Arrow").style.transform = "rotate(180deg)";
        document.getElementById("iconArrow6").style.top = "-219px"
        document.getElementById("img6").style.opacity ="0.9"
        setTimeout(() => {
            document.getElementById("text6").style.display = "flex"
        }, 220);
        f++
    }
    else {
        document.getElementById("6Arrow").style.transform = "rotate(0deg)"
        document.getElementById("text6").style.display = "none";
        document.getElementById("iconArrow6").style.top = "-10px";
        document.getElementById("img6").style.opacity ="1"
        f--
    }
} else {
    if(f == 0) {
        document.getElementById("6Arrow").style.transform = "rotate(180deg)";
        document.getElementById("iconArrow6").style.top = "-211px"
        document.getElementById("img6").style.opacity ="0.9"
        setTimeout(() => {
            document.getElementById("text6").style.display = "flex"
        }, 220);
        f++
    }
    else {
        document.getElementById("6Arrow").style.transform = "rotate(0deg)"
        document.getElementById("text6").style.display = "none";
        document.getElementById("iconArrow6").style.top = "-10px";
        document.getElementById("img6").style.opacity ="1"
        f--
    }
}
}
