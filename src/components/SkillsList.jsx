import Skill from './Skill';

const SkillsList = ({ skills }) => {
  return (
    <div>
      {
        skills.map(skill =>
          <Skill
            key={skill.title}
            skill={skill}
          />
        )
      }
    </div>
  );
};

export default SkillsList;