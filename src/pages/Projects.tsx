import projectsData from '../data/projects.json';
import type { Project } from '../data/projects';
import ProjectCard from '../components/ProjectCard';


const projects = projectsData as Project[];

function Projects() {
  return (
    <section className="about-section">
      <div className='about-header'>
      <p className='small-title'>
        My Techinical Projects
      </p>
      <h1>Projects</h1>
      </div>
      <div className='info-grid'>
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;