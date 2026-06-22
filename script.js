// ===========================
// STICKY HEADER
// ===========================
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if(window.scrollY > 50){
        header.classList.add("sticky");
    }else{
        header.classList.remove("sticky");
    }
});


// ===========================
// SMOOTH SCROLL
// ===========================
document.querySelectorAll('nav a').forEach(link => {

    link.addEventListener('click', function(e){

        const target = this.getAttribute("href");

        if(target.startsWith("#")){
            e.preventDefault();

            document.querySelector(target)
            .scrollIntoView({
                behavior:"smooth"
            });
        }
    });

});


// ===========================
// HERO TEXT ANIMATION
// ===========================
const heroTitle = document.querySelector(".hero h1");

const text = heroTitle.innerText;
heroTitle.innerText = "";

let index = 0;

function typingEffect(){

    if(index < text.length){

        heroTitle.innerHTML += text.charAt(index);

        index++;

        setTimeout(typingEffect, 100);
    }
}

typingEffect();


// ===========================
// DESTINATION AUTO SLIDER
// ===========================
const slider = document.getElementById("slider");

function moveSlide(direction){

    slider.scrollBy({
        left: direction * 300,
        behavior:"smooth"
    });

}

setInterval(() => {

    slider.scrollBy({
        left:300,
        behavior:"smooth"
    });

    if(
        slider.scrollLeft + slider.clientWidth
        >= slider.scrollWidth - 10
    ){

        setTimeout(() => {

            slider.scrollTo({
                left:0,
                behavior:"smooth"
            });

        },1500);
    }

},4000);


// ===========================
// SCROLL REVEAL ANIMATION
// ===========================
const reveals = document.querySelectorAll(
    ".about, .destination, .event, footer"
);

function revealSection(){

    reveals.forEach(section => {

        const top = section.getBoundingClientRect().top;

        const visible = window.innerHeight - 100;

        if(top < visible){
            section.classList.add("show");
        }

    });
}

window.addEventListener("scroll", revealSection);
revealSection();


// ===========================
// CARD HOVER EFFECT
// ===========================
document.querySelectorAll(".card").forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const x = e.offsetX;
        const y = e.offsetY;

        card.style.transform =
        `perspective(1000px)
         rotateY(${(x-100)/20}deg)
         rotateX(${-(y-100)/20}deg)
         scale(1.05)`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform =
        "perspective(1000px) rotateX(0) rotateY(0) scale(1)";
    });

});


// ===========================
// COUNTER ANIMATION
// ===========================
const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const updateCounter = () => {

        const target =
        +counter.getAttribute("data-target");

        const current =
        +counter.innerText;

        const increment =
        target / 100;

        if(current < target){

            counter.innerText =
            Math.ceil(current + increment);

            setTimeout(updateCounter,20);

        }else{

            counter.innerText = target;
        }

    };

    updateCounter();

});


// ===========================
// BACK TO TOP BUTTON
// ===========================
const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.classList.add("top-btn");

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

    if(window.scrollY > 400){

        topBtn.classList.add("show");

    }else{

        topBtn.classList.remove("show");
    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});


// ===========================
// DARK MODE
// ===========================
const darkBtn = document.createElement("button");

darkBtn.innerHTML = "🌙";

darkBtn.classList.add("dark-btn");

document.body.appendChild(darkBtn);

darkBtn.addEventListener("click",()=>{

    document.body.classList.toggle("dark");

});


// ===========================
// LANGUAGE SWITCH
// ===========================
const translations = {

    id:{
        hero:"Explore Kalimantan Timur",
        about:"Tentang Kaltim"
    },

    en:{
        hero:"Explore East Kalimantan",
        about:"About East Kalimantan"
    }

};

const langSelect =
document.querySelector(".language select");

langSelect.addEventListener("change",()=>{

    const lang = langSelect.value.toLowerCase();

    document.querySelector(".hero h1")
    .innerText = translations[lang].hero;

    document.querySelector(".about h2")
    .innerText = translations[lang].about;

});
