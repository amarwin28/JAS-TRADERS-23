/* ==========================================
   JAS TRADERS - Premium JavaScript
========================================== */

// ==============================
// INTRO ANIMATION
// ==============================

window.addEventListener("load", () => {

    const intro = document.getElementById("intro");

    setTimeout(() => {

        intro.style.opacity = "0";
        intro.style.visibility = "hidden";

    }, 3000);

});

// ==============================
// MOBILE MENU
// ==============================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    menuBtn.innerHTML = navLinks.classList.contains("active")
        ? '<i class="fa-solid fa-xmark"></i>'
        : '<i class="fa-solid fa-bars"></i>';

});

// Close menu after click

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuBtn.innerHTML =
            '<i class="fa-solid fa-bars"></i>';

    });

});

// ==============================
// STICKY NAVBAR
// ==============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){

        header.style.background = "rgba(0,0,0,.95)";
        header.style.boxShadow = "0 8px 25px rgba(0,0,0,.5)";

    }else{

        header.style.background = "rgba(0,0,0,.75)";
        header.style.boxShadow = "none";

    }

});

// ==============================
// FADE ANIMATION
// ==============================

const faders = document.querySelectorAll(".fade");

const observer = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});

faders.forEach(item=>observer.observe(item));

// ==============================
// BACK TO TOP
// ==============================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

    if(window.scrollY>400){

        topBtn.style.display="flex";

    }else{

        topBtn.style.display="none";

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

});

// ==============================
// ACTIVE NAVIGATION
// ==============================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const top=section.offsetTop-120;
        const height=section.clientHeight;

        if(scrollY>=top){

            current=section.getAttribute("id");

        }

    });

    navItems.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});

// ==============================
// HERO PARALLAX
// ==============================

window.addEventListener("scroll",()=>{

    const hero=document.querySelector(".hero");

    hero.style.backgroundPositionY =
    window.scrollY*0.4+"px";

});

// ==============================
// GALLERY ZOOM
// ==============================

document.querySelectorAll(".gallery-item img").forEach(img=>{

    img.addEventListener("mousemove",(e)=>{

        img.style.transform="scale(1.12)";

    });

    img.addEventListener("mouseleave",()=>{

        img.style.transform="scale(1)";

    });

});

// ==============================
// CONTACT FORM
// ==============================

const form=document.querySelector(".contact-form");

if(form){

form.addEventListener("submit",(e)=>{

    e.preventDefault();

    alert("Thank you! Your enquiry has been received. We will contact you shortly.");

    form.reset();

});

}

// ==============================
// HERO LOGO GLOW
// ==============================

const heroLogo=document.querySelector(".hero-logo-img");

if(heroLogo){

setInterval(()=>{

heroLogo.style.filter=
"drop-shadow(0 0 12px gold) drop-shadow(0 0 35px gold)";

setTimeout(()=>{

heroLogo.style.filter=
"drop-shadow(0 0 6px gold)";

},900);

},1800);

}

// ==============================
// END
// ==============================