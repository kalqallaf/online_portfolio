const filter_buttons = document.querySelectorAll('.filter-button');

const data = {
    bertspell: {
        id: "bert",
        name: "BERTSpell",
        desc: "Machine Learning Kuwaiti Spell Checker",
        category: "python",
        url: "images/projects/bert.png", 
        details: `
        BERTSpell can be considered the first attempt ever at creating a spell checker for Kuwaiti arabic. It was developed by fine-tuning Google's BERT (Bidirectional Encoder Representations
        using Transformers) on scraped instagram comments from popular Kuwaiti news accounts. BERT was used because it produces state-of-the-art results using only small amounts of data. Furthermore,
        BERT bidirectionality (understanding text in both directions) was essential to correct contextual spelling errors for Arabic. 
        <br><br>
        The program targeted both misspelling errors and contextual errors and can be split into four main sections: 
        <ul>
            <li> <strong> Front-End </strong>: a GUI developed using the React framework. It allowed users to input text and displayed corrected text as the output.  </li>
            <li> <strong> Back-End </strong>: Flask was used to run the server the server side and the back-end stored the fine-tuned BERT models which made predictions on the passed text from the front-end </li>
            <li> <strong> Pseudo Spelling Error Program </strong>: A python program which inserted different types of spelling errors into a corpus of text. The produced
            text was used to fine-tune BERT models. </li>
            <li> <strong> Instagram Screen Scraper </strong>: A python tool which was used to collect Kuwaiti Arabic comments from instagram pages. </li>

        </ul>
        
        The final program was able to detect spelling errors at the following accuracies:
        <ul>
        <li> Modern Standard Arabic: 94% </li>
        <li> Kuwaiti Arabic: 97% </li>
        </ul>
        
        `
    },
    gizmoball: {
        id: "gizmo",
        name: "Gizmoball",
        desc: "Pinball Simulation",
        category: "java",
        url: "images/projects/gizmoball.jpg", 
        details: `
        Gizmoball is a project created using Java. The aim of this project was to design, document, build and test a pinball simulation. 
        The program was built using <strong> the Model-View-Controller (MVC) design pattern, is fully decoupled</strong>, and supported two modes: building and running. 
        In building, the user was able to create and edit different shapes including bumpers and flippers. Bumpers and flippers' actions
        were connected to triggers. Users were also able to save and load states. 
        `, 


    },
    paintings: {
        id: "paintings",
        name: "Painting Orders",
        desc: "Database Driven Website",
        category: "web",
        url: "images/projects/paintingOrders.png", 
        details: `
        This website was developed using HTML, CSS, Javascript, and PHP. It includes a database that contains the details of each painting, and users are able to 
        click "More" to view details about each painting and this was done using PHP. In addition, a user management system was created which allowed users to 
        register with an email and a password to place orders. This system was validated and secured using hashing and PHP form validation methods. 
        `


    },
    shell: {
        id: "shell",
        name: "Simple Shell",
        desc: "Simple OS Shell for a Unix-type system",
        category: "c",
        url: "images/projects/unix.jpg", 
        details: `
        This program was developed using C in a linux environment. The shell supported the following commands:
        <ul>
            <li> cd – change working directory </li>
            <li> getpath – print system path </li>
            <li> setpath – set system path </li>
            <li> !! – invoke last command from history </li>
            <li> !<no> – invoke command with number <no> from history </li>
            <li> alias <name> <command> – print all set aliases </li>
            <li> unalias <command> – remove any associated alias </li>
        </ul>
        The shell also supported the use of a fork() function which allowed users to create child processes.
        The program was rigorously tested to prevent the program from crashing.
        `

    },

    breakout: {
        id: "breakout",
        name: "Breakout",
        desc: "A mobile implementation of Atari Breakout",
        category: "web",
        url: "images/projects/breakout.png", 
        details: `
        This is a mobile game that was created using HTML5, CSS3, and Javascript. It included simple elements such as a paddle, a pong squash ball, and a wall of bricks.
        Accelerometers were exploited to allow users to play the game by tilting their phones right and left. The game starts by dropping a ball in the screen, and the user
        has to tilt their phones to hit the ball. Once the ball hits the paddle, it rebounds and accelerates in the opposite direction. Once the ball hits a brick, the brick is
        destroyed and a score counter is incremented. 
        `
    },

    bostonmetro: {
        id: "bostonmetro",
        name: "Boston Metro System",
        desc: "Implementation of the boston metro map as an ADT",
        category: "java",
        url: "images/projects/bostonmetro.png", 
        details: `
        The Boston Metro System is a program that is able to provide directions to passengers on how to get from one station to another. A key requirement of this program
        was that both the design and implementation were fully decouples the multi-graph ADT from the rest of the system. The system was built through a series of organised steps,
        starting with creating an initial design for the system using UML class diagrams and an explanation of the role of each class in the design as well as the relationships
        between the interfaces, classes, and methods. Next, the system was implemented in Java and tested thoroughly to ensure robustness. 
        `
    },
}

const addProject = function(project) {
    const container = document.querySelector('.projects-container');
    const div = document.createElement('div');

    div.className = `col-lg-4 d-flex mt-3 filter ${project.category}`;
    div.innerHTML = `
            <div class="card animated fadeIn">
                <img src="${project.url}" class="img-thumbnail img-fluid card-img-top">
                <div class="card-body text-center">
                    <h5 class="card-title text-center">${project.name}</h5>
                    <p class="card-text">${project.desc}</p>

                    <!-- Modal trigger -->
                    <button type="button" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#${project.id}Modal">
                    Details
                    </button>
                </div>
            </div>
            <!-- Modal -->
                    <div class="modal fade" id="${project.id}Modal">
                    <div class="modal-dialog modal-dialog-scrollable">
                        <div class="modal-content">
                            <div class="modal-header">
                            
                                <h5 class="modal-title" id="${project.id}ModalLabel">${project.name}</h5>
                                <button type="button" class="close" data-dismiss="modal">
                                <span>&times;</span>
                                </button>
                                
                            </div>
                            <div class="modal-body">
                           
                                <img src="${project.url}" class="img-thumbnail mb-3">

                                <h5>Description:</h5>
                                <p class="text-justify">${project.details}</p> 
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-primary btn-sm" data-dismiss="modal">Close</button>
                            </div>
                            </div>
                        </div>
                    </div>
    `;
    container.appendChild(div);
}

const clearProjects = function() {
    const projects = document.querySelectorAll('.filter');
    projects.forEach(project => {
        project.remove();
    });
}

const displayProjects = function() {

    Object.values(data).forEach(project => {
        addProject(project);
    })
}

filter_buttons.forEach(btn => {
    btn.addEventListener('click', e => {
        e.preventDefault();
        clearProjects();

        filterName = e.target.getAttribute('data-filter');

        // All projects
        if (filterName === 'all') {
            displayProjects();

        // Filtered Projects
        } else {
            Object.values(data).forEach(project => {
                if(project.category === filterName) {
                    addProject(project);
                } 
            });
        }
    });
});


document.addEventListener('DOMContentLoaded', displayProjects);