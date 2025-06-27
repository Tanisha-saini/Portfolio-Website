
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
