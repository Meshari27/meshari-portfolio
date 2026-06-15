import skillsData from "../data/skills.json"
import type { Skill } from "../data/skills"
import SkillCard from "../components/SkillCard"

const skills = skillsData as Skill[];

function Skills(){
  return (
    <section className="about-section">
      <div className="about-header">
        <p className="small-title">Technical Skills</p>
        <h1>Skills</h1>
      </div>

      

      <div className="info-grid">
        {skills.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
