import './Projects.css';

function Projects() {

    return(
      <main>
        <div class="buttons-container" id="buttons-container">
          <button class="switch-button" id="html-css-button"> HTML / CSS</button>
          <button class="switch-button" id="javascript-button">JavaScript</button>
          <button class="switch-button" id="reactjs-button">ReactJS</button>
        </div>

        <div class="projects-container">
          <div class="bar">
            <div class="circle first"></div>
            <div class="circle second"></div>
            <div class="circle third"></div>
          </div>

          <section id="projects"></section>
        </div>
      </main>
    );
};

export default Projects;