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

var c = 0;
var d = 0;
var f = 0;
var widthSize = window.screen.availHeight
var heightSize = window.screen.availWidth

window.onresize = function () {
   widthSize = window.screen.availHeight
   heightSize = window.screen.availWidth
  console.log(widthSize)
  console.log(heightSize)
}

window.onload = function(){
  document.querySelector('.cont_modal').className = "cont_modal";    
  document.querySelector('.cont_modal2').className = "cont_modal2";     
  // document.querySelector('.cont_modal3').className = "cont_modal3";
  document.querySelector('.cont_modal').className = "cont_modal cont_modal_active";  
  document.querySelector('.cont_modal2').className = "cont_modal2 cont_modal_active2"
  // document.querySelector('.cont_modal3').className = "cont_modal3 cont_modal_active3"
  firstCard()
  secondCard()
  // thirdCard()
  }

function firstCard(){
  if(c == 0) {
    document.querySelector('.cont_modal').className = "cont_modal";  
    c++
  } else {
    document.querySelector('.cont_modal').className = "cont_modal cont_modal_active";  
    c--
  } 
  if(window.screen.availWidth <= 700) {
    document.querySelector('.cont_modal').className = "cont_modal cont_modal_active"
    document.querySelector('.cont_text_ingredients').style.display = "none";
    document.querySelector('.cont_photo').style.float = "none";
    document.querySelector('.cont_photo').style.marginLeft = "100px";
    document.querySelector('.cont_photo').style.marginRight = "0";
  }
    }

    function secondCard(){
      if(d == 0) {
        document.querySelector('.cont_modal2').className = "cont_modal2";  
        d++
      } else {
        document.querySelector('.cont_modal2').className = "cont_modal2 cont_modal_active2";  
        d--
      } 
      if(window.screen.availWidth <= 700) {
        document.querySelector('.cont_modal2').className = "cont_modal2 cont_modal_active2"
        document.querySelector('.cont_text_ingredients2').style.display = "none";
        document.querySelector('.cont_photo2').style.float = "none";
        document.querySelector('.cont_photo2').style.marginLeft = "100px";
        document.querySelector('.cont_photo2').style.marginRight = "0";
      }
        }


        // function thirdCard(){
        //   if(f == 0) {
        //     document.querySelector('.cont_modal3').className = "cont_modal3";  
        //     f++
        //   } else {
        //     document.querySelector('.cont_modal3').className = "cont_modal3 cont_modal_active3";  
        //     f--
        //   } 
        //   if(window.screen.availWidth <= 700) {
        //     document.querySelector('.cont_modal3').className = "cont_modal3 cont_modal_active3"
        //     document.querySelector('.cont_text_ingredients3').style.display = "none";
        //     document.querySelector('.cont_photo3').style.float = "none";
        //     document.querySelector('.cont_photo3').style.marginLeft = "100px";
        //     document.querySelector('.cont_photo3').style.marginRight = "0";
        //   }
        //     }

       