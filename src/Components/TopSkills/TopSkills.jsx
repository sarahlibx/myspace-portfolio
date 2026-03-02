import { SKILLS } from '../../data';

export function TopSkills() {
  return (
    <div className="card border-black" id="top-8">
      <div className="card-header bg-primary text-white fw-bold py-1">
        Sarah's Top 8 Skills
      </div>
      <div className="card-body">
        <div className="row row-cols-4 g-2 text-center">
          {SKILLS.map((skill) => (
            <div className="col" key={skill.name}>
              <p className="small mb-1 text-primary fw-bold">{skill.name}</p>
              <img
                src={skill.icon}
                className="img-fluid border border-primary p-1"
                alt={skill.name}
                style={{ width: "60px", height: "60px", objectFit: "cover" }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};