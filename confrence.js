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


// if (window.innerWidth > 768) {


// const footerT= document.querySelector(".footerT");
// const navmenuL= document.querySelector(".nav-menuL");
// const navmenuA= document.querySelector(".nav-menuA");

// window.addEventListener('scroll',(event) => {

    
    
//     if(document.documentElement.scrollTop > 700) {
        
//     footerT.classList.toggle("active");
    
//     }

//     else if(document.documentElement.scrollTop < 300) {
//         navmenuL.classList.toggle("active");
//         navmenuA.classList.toggle("active");
//           }
//           else {
//             footerT.classList.remove("active");
//             navmenuL.classList.remove("active");
//             navmenuA.classList.remove("active");
            

//           // }
// })}






// // // Hide navMenu
// // document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", ( ) => {
// // hamburger.classList.remove("active");
// // navmenu.classList.remove("active");
// // }))






//     // footerT.classList.remove('active');
    

//     // if(document.documentElement.scrollTop < 200) {
//     //     footerT.classList.toggle('active');
//     //   }

//     // if(document.documentElement.scrollTop > 200){
//     //   footerT.classList.toggle('active');
// //     // }

  
// // });
