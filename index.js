const elts = {
    text1: document.getElementById("text1"),
    text2: document.getElementById("text2")
};

const texts = [
    "Tanisha Saini",
    "Programmer",
    "Problem Solver",
    "Enthusiast",
    "Developer",
    "Empathetic",
];

const morphTime = 1.5;
const cooldownTime = 0.5;

let textIndex = texts.length - 1;
let time = new Date();
let morph = 0;
let cooldown = cooldownTime;

elts.text1.textContent = texts[textIndex % texts.length];
elts.text2.textContent = texts[(textIndex + 1) % texts.length];

function doMorph() {
    morph -= cooldown;
    cooldown = 0;

    let fraction = morph / morphTime;

    if (fraction > 1) {
        cooldown = cooldownTime;
        fraction = 1;
    }

    setMorph(fraction);
}

function setMorph(fraction) {
    elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
    elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

    fraction = 1 - fraction;
    elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
    elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

    elts.text1.textContent = texts[textIndex % texts.length];
    elts.text2.textContent = texts[(textIndex + 1) % texts.length];
}

function doCooldown() {
    morph = 0;

    elts.text2.style.filter = "";
    elts.text2.style.opacity = "100%";

    elts.text1.style.filter = "";
    elts.text1.style.opacity = "0%";
}

function animate() {
    requestAnimationFrame(animate);

    let newTime = new Date();
    let shouldIncrementIndex = cooldown > 0;
    let dt = (newTime - time) / 1000;
    time = newTime;

    cooldown -= dt;

    if (cooldown <= 0) {
        if (shouldIncrementIndex) {
            textIndex++;
        }

        doMorph();
    } else {
        doCooldown();
    }
}

animate();

// Initialize particles with inline configuration
document.addEventListener('DOMContentLoaded', function() {
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#ffffff"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                }
            },
            "opacity": {
                "value": 0.5,
                "random": false
            },
            "size": {
                "value": 3,
                "random": true
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 6,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out"
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "repulse"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "repulse": {
                    "distance": 200
                },
                "push": {
                    "particles_nb": 4
                }
            }
        },
        "retina_detect": true
    });
});

// Projects generation
function initializeProjects() {
    const projects=[
        {
            id:1,
            projectname:'Make Even',
            projectdescription:'Building Bonds Across Generations where all thrive together in shared experiences.',
            image:'assets/make-even.png',
            githublink:'https://github.com/Tanisha-saini/MakeEven',
            redirectlink:'https://make-even.vercel.app/',
        },

        {
            id:2,
            projectname:'Medi Cube',
            projectdescription:'Empowering Healthcare Management: Simplify Medical Test Results, Centralized Access.',
            image:'assets/medi-cube.png',
            githublink:'https://github.com/Tanisha-saini/MediCube',
            redirectlink:'https://medi-cube.vercel.app/',
        },

        {
            id:3,
            projectname:'Sanskrit Srijana',
            projectdescription:'Enhance Your Cognitive Abilities in Sanskrit with User-Friendly Lesson and Translation.',
            image:'assets/sanskrit-srijana.png',
            githublink:'https://github.com/Tanisha-saini/Sanskrit-Srijana',
            redirectlink:'https://github.com/Tanisha-saini/Sanskrit-Srijana',
        },

        {
            id:4,
            projectname:'QR Code generator',
            projectdescription:'Create QR codes effortlessly with Customizable colors.',
            image:'assets/qr-code-gen.png',
            githublink:'https://tanisha-saini.github.io/QR-Code-Generator/',
            redirectlink:'https://tanisha-saini.github.io/QR-Code-Generator/',
        },
        {
            id:5,
            projectname:'Tic Tac Toe',
            projectdescription:'Play and enjoy the classic game of Xs and Os with friends.',
            image:'assets/tic-tac-toe.png',
            githublink:'https://github.com/Tanisha-saini/tic-tac-toe',
            redirectlink:'https://tictactoeproject.vercel.app/',
        }
    ]

    const getprojects=(data,i)=>{
        return(
            `<div id="project-list">
                <a href="${data?.redirectlink}" target="_blank"><img src="${data?.image}"></a>
                <div id="to-link">
                    <a href="${data?.redirectlink}" target="_blank"><img  src="assets/redirect.png"></a>
                    <a href="${data?.githublink}" target="_blank"><img  src="assets/github.png"></a>
                </div>
                <h2>${data?.projectname}</h2>
                <p>${data?.projectdescription}</p>
            </div>`
        )
    }

    var projectsection=document.querySelector('#project-inner');
    
    if (projectsection) {
        // Clear any existing content first
        projectsection.innerHTML = '';
        
        for(let i=0;i<projects.length;i++){
            projectsection.innerHTML+=getprojects(projects[i],i);
        }
    }
}

// Wait for the page to be fully loaded
window.addEventListener('load', function() {
    // Add a small delay to ensure everything is ready
    setTimeout(initializeProjects, 100);
});

// Also try with DOMContentLoaded as a backup
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(initializeProjects, 100);
});
