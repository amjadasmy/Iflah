// =========================
// OPEN BUTTON FIX
// =========================

const openBtn = document.getElementById("openBtn");

openBtn.addEventListener("click", () => {

    document.getElementById("welcome").classList.add("hidden");
    document.getElementById("proposal").classList.remove("hidden");

    startTypewriter();
    startHearts();

});

// =========================
// TYPEWRITER MESSAGE
// =========================

const message = `
My Dearest Iflah ❤️

From the moment you came into my life,
everything became brighter.

You are my happiness,
my peace,
and my favorite person.

Today I just want to ask you one thing...

Will you be my girlfriend? ❤️
`;

let i = 0;
const speed = 40;

function startTypewriter(){

    const textBox = document.getElementById("typewriter");

    function type(){

        if(i < message.length){
            textBox.innerHTML += message.charAt(i);
            i++;
            setTimeout(type, speed);
        }

    }

    type();
}

// =========================
// HEART ANIMATION
// =========================

function startHearts(){

    const container = document.getElementById("hearts");

    setInterval(() => {

        const heart = document.createElement("div");
        heart.innerHTML = ["❤️","💖","💜","💗"][Math.floor(Math.random()*4)];
        heart.classList.add("heart");

        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = (15 + Math.random()*25) + "px";
        heart.style.animationDuration = (3 + Math.random()*4) + "s";

        container.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 7000);

    }, 300);

}// =========================
// YES BUTTON (SUCCESS)
// =========================

const yesBtn = document.getElementById("yesBtn");

yesBtn.addEventListener("click", () => {

    document.getElementById("proposal").classList.add("hidden");
    document.getElementById("success").classList.remove("hidden");

    launchConfetti();

});

// =========================
// NO BUTTON (RUN AWAY)
// =========================

const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseover", moveAway);
noBtn.addEventListener("touchstart", moveAway);

function moveAway(){

    const x = Math.random() * (window.innerWidth - 120);
    const y = Math.random() * (window.innerHeight - 80);

    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";

}

// =========================
// CONFETTI SYSTEM
// =========================

const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let pieces = [];

function launchConfetti(){

    pieces = [];

    for(let i=0;i<200;i++){

        pieces.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            w: 6,
            h: 10,
            dx: (Math.random() - 0.5) * 5,
            dy: 2 + Math.random() * 4,
            color: ["#ff1493","#ffd700","#ffffff","#c77dff"][Math.floor(Math.random()*4)]
        });

    }

    animate();
}

function animate(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    pieces.forEach(p => {

        ctx.fillStyle = p.color;
        ctx.fillRect(p.x,p.y,p.w,p.h);

        p.x += p.dx;
        p.y += p.dy;

        if(p.y > canvas.height){
            p.y = -10;
        }

    });

    requestAnimationFrame(animate);
}

// =========================
// SMALL ROMANTIC FINAL TOUCH
// =========================

console.log("❤️ If she said yes, you won her heart ❤️");setInterval(() => {

    const heart = document.createElement("div");
    heart.innerHTML = ["❤️","💖","💜"][Math.floor(Math.random()*3)];
    heart.classList.add("heart");

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = "20px";
    heart.style.opacity = "0.7";
    heart.style.animationDuration = "6s";

    document.getElementById("hearts").appendChild(heart);

    setTimeout(() => heart.remove(), 6000);

}, 1200);
