import React from 'react';
import './projects.css';
import projectData from '../data/Projects';
import ProjectCard from '../projectcard/ProjectCard';
function Projects() {
  return (
    <React.Fragment>
        <section className="section projects" id="projects" data-aos="fade-left">
            <h2 className="section-title">Projects</h2>
            <div className="project-grid">
              {
                projectData.map((project, index) => {
                  return <ProjectCard projectDetails={project} key={index} anim={ index % 2 == 0 ? "fade-right" : "fade-left"}/>
                })
              }
            </div>
        </section>
    </React.Fragment>
  )
}

export default Projects