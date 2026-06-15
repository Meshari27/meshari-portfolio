import type { Skill } from "../data/skills"



type SkillCardProps = {
    skill: Skill;

};

function SkillCard({ skill }: SkillCardProps) {
    return (
        <article className="info-card">
            <h3>{skill.name}</h3>



            <div className="skill-tags">
                <span className="skill-tag">
                    {skill.category}
                </span>
            </div>
        </article>
    );
}

export default SkillCard;