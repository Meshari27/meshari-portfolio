import type { Project } from "../data/projects";

type ProjectCardProps = {
    project: Project;
};

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="info-card">
      <h3>{project.title}</h3>
      <p>{project.description}</p>

      <div className="tech-list">
        {project.technologies.map((tech) => (
          <span key={tech} className="tech-tag">
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
}

export default ProjectCard;
