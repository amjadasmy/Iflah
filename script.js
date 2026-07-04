// ==========================
// Romantic Proposal Website
// Part 1
// ==========================

const message = `My Dearest Iflah,

From the very first moment you entered my life,
my world became brighter.

Your smile is my favorite sunrise.
Your laughter is my favorite song.
Your happiness means everything to me.

I don't promise a perfect life,
but I promise to always love you,
respect you,
support you,
and stand beside you.

Today I want to ask you something...

Will you be my girlfriend? ❤️`;

let i = 0;

const music = document.getElementById("bgMusic");
const typewriter = document.getElementById("typewriter");

function startLove() {

    document.getElementById("welcome").classList.add("hidden");
    document.getElementById("proposal").classList.remove("hidden");

    music.play().catch(() => {});

    typeWriter();

}

// ==========================
// Typewriter Effect
// ==========================

function typeWriter() {

    if (i < message.length) {

        typewriter.innerHTML += message.charAt(i);

        i++;

        setTimeout(typeWriter, 40);

    }

}

// ==========================
// Floating Hearts
// ==========================

const hearts = document.getElementById("hearts");

setInterval(() => {

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = ["❤️","💖","💕","💗","💜"][Math.floor(Math.random()*5)];

    heart.style.left = Math.random()*100 + "%";

    heart.style.animationDuration = (4 + Math.random()*4) + "s";

    heart.style.fontSize = (18 + Math.random()*30) + "px";

    hearts.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    },8000);

},300);

// ==========================
// No Button Movement
// ==========================

const noBtn = document.getElementById("noBtn");

function moveButton(){

    const x = Math.random() * (window.innerWidth - 150);

    const y = Math.random() * (window.innerHeight - 80);

    noBtn.style.left = x + "px";

    noBtn.style.top = y + "px";

}

noBtn.addEventListener("mouseenter", moveButton);
noBtn.addEventListener("touchstart", moveButton);// ==========================
// Part 2
// ==========================

// YES Button
const yesBtn = document.getElementById("yesBtn");

yesBtn.addEventListener("click", () => {

    document.getElementById("proposal").classList.add("hidden");
    document.getElementById("success").classList.remove("hidden");

    launchConfetti();

});

// ==========================
// Simple Confetti
// ==========================

const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");

function resizeCanvas(){

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

}

resizeCanvas();

window.addEventListener("resize", resizeCanvas);

let confetti = [];

function launchConfetti(){

    confetti = [];

    for(let i=0;i<220;i++){

        confetti.push({

            x:Math.random()*canvas
