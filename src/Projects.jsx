import './Projects.css';
import { useState, useEffect, useRef } from 'react';

function Projects() {
    const [selectedArray, setSelectedArray] = useState([]);
    
    // Recommended by AI, instead of me using three separate states for three arrays
    const [projectsByCategory, setProjectsByCategory] = useState(
      {
      html: [],
      javascript: [],
      react: []
      }
    );

    useEffect(() => {
      fetch('./projects.json')
      .then(res =>res.json())
      .then(data => {
        console.log(data);
        // categories: "html-css" "javascript" "reactjs";

        setProjectsByCategory({
          html: data.filter(item => item.category === "html-css"),
          javascript: data.filter(item => item.category === "javascript"),
          react: data.filter(item => item.category === "reactjs")
        });
        console.log(`projectsByCategory: ${JSON.stringify(projectsByCategory, null, 2)}`);

        setSelectedArray(data.filter(item => item.category === "reactjs"));
      })
      .catch(error => console.log("Error: ", error));
    }, []);

    return(
      <main>
        <div className="buttons-container" id="buttons-container">
          {/* Pass in an anonymous function for functions thathave parameters so that they don't get called instantly 
              Functions that don't need an anonymous function are ones that don't use parameters */}
          <button className="switch-button" id="html-css-button" onClick={() => setSelectedArray(projectsByCategory.html)}> HTML / CSS</button>
          <button className="switch-button" id="javascript-button" onClick={() => setSelectedArray(projectsByCategory.javascript)}>JavaScript</button>
          <button className="switch-button" id="reactjs-button" onClick={() => setSelectedArray(projectsByCategory.react)}>ReactJS</button>
        </div>

        <div className="projects-container">
          <div className="bar">
            <div className="circle first"></div>
            <div className="circle second"></div>
            <div className="circle third"></div>
          </div>

          <section id="projects">
            {selectedArray.map( ({ href, src, alt, title, description }) => ( 
            <div className="project-row" id="project-tile-description-container">
              <div className="project-tile">
                  <a href={href} target="_blank">
                      <img src={src} alt={alt}/>
                  </a>
              </div>
          
              <div className="project-description">
                  <h3 className="project-title">{title}</h3>
                  <p className="project-paragraph">{description}</p>
              </div>
            </div>
            ))}
          </section>
        </div>
      </main>
    );
};

export default Projects;