// ================================
// Smooth Scroll
// ================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener('click', function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute('href'));

if(target){

target.scrollIntoView({
behavior:'smooth'
});

}

});

});

// ================================
// Navbar Scroll Effect
// ================================

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>80){

header.style.background="rgba(0,0,0,.92)";
header.style.boxShadow="0 10px 30px rgba(0,0,0,.45)";

}else{

header.style.background="rgba(10,10,10,.6)";
header.style.boxShadow="none";

}

});

// ================================
// Fade In Animation
// ================================

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

},{
threshold:.2
});

document.querySelectorAll(".service-box,.hero-card").forEach(el=>{

el.style.opacity="0";
el.style.transform="translateY(50px)";
el.style.transition=".8s ease";

observer.observe(el);

});

// ================================
// Hero Text Animation
// ================================

window.addEventListener("load",()=>{

const hero=document.querySelector(".hero-left");

hero.style.opacity="0";
hero.style.transform="translateY(40px)";
hero.style.transition="1s";

setTimeout(()=>{

hero.style.opacity="1";
hero.style.transform="translateY(0)";

},300);

});

// ================================
// Mouse Glow Effect
// ================================

const glow=document.createElement("div");

glow.style.position="fixed";
glow.style.width="220px";
glow.style.height="220px";
glow.style.borderRadius="50%";
glow.style.pointerEvents="none";
glow.style.background="radial-gradient(circle, rgba(255,215,0,.18), transparent 70%)";
glow.style.transform="translate(-50%,-50%)";
glow.style.zIndex="-1";
glow.style.transition="left .08s linear, top .08s linear";

document.body.appendChild(glow);

document.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX+"px";
glow.style.top=e.clientY+"px";

});

// ================================
// Scroll To Top Button
// ================================

const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

topBtn.style.position="fixed";
topBtn.style.bottom="30px";
topBtn.style.right="30px";
topBtn.style.width="55px";
topBtn.style.height="55px";
topBtn.style.borderRadius="50%";
topBtn.style.border="none";
topBtn.style.background="#FFD700";
topBtn.style.color="#000";
topBtn.style.fontSize="22px";
topBtn.style.cursor="pointer";
topBtn.style.display="none";
topBtn.style.zIndex="999";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,
behavior:"smooth"

});

};

// ================================
// Service Card Hover Effect
// ================================

document.querySelectorAll(".service-box").forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-15px) scale(1.03)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0) scale(1)";

});

});

// ================================
// Typing Effect
// ================================

const words=[
"Developer",
"Creator",
"Designer",
"Entrepreneur"
];

let wordIndex=0;
let charIndex=0;

const typing=document.createElement("h3");

typing.style.color="#FFD700";
typing.style.marginTop="20px";
typing.style.fontWeight="600";

document.querySelector(".hero-left").appendChild(typing);

function type(){

if(charIndex<words[wordIndex].length){

typing.textContent+=words[wordIndex].charAt(charIndex);

charIndex++;

setTimeout(type,120);

}else{

setTimeout(erase,1800);

}

}

function erase(){

if(charIndex>0){

typing.textContent=words[wordIndex].substring(0,charIndex-1);

charIndex--;

setTimeout(erase,60);

}else{

wordIndex++;

if(wordIndex>=words.length){

wordIndex=0;

}

setTimeout(type,300);

}

}

type();

// ================================
// Console Message
// ================================

console.log("🚀 Welcome to KIM HYUNG");
