const hamburger= document.querySelector(".hamburger");
const navmenu= document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {

    if(document.body.style.overflow === 'hidden') {
        document.body.style.overflow = 'auto';
        hamburger.classList.remove("active");
        navmenu.classList.remove("active");
    }
    else {
    hamburger.classList.toggle("active");
    navmenu.classList.toggle("active");
    document.body.style.overflow = 'hidden';
    }
})
// Hide navMenu
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", ( ) => {
hamburger.classList.remove("active");
navmenu.classList.remove("active");
}))


// if (document.getElementById('email').style.zIndex === '-1') {
//     document.getElementById('email').style.zIndex = '1';
//     document.getElementById('names').style.zIndex = '1';
//     document.body.style.overflow = 'auto';
//     document.getElementById('navB').style.opacity = '1';
//   } else {
//     document.getElementById('email').style.zIndex = '-1';
//     document.getElementById('names').style.zIndex = '-1';
//     document.body.style.overflow = 'hidden';
//     document.getElementById('navB').style.opacity = '0';
//   }