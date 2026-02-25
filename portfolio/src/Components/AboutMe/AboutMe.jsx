// src/components/AboutMe.jsx
export function AboutMe({ about }) {
  return (
    <div className="card border-black mb-4" id="about">
      <div className="card-header bg-primary text-white fw-bold py-1">
        About Me:
      </div>
      <div className="card-body small">
        <p className="mb-2">
          <strong>General:</strong> {about.general}
        </p>
        <p className="mb-2">
          <strong>Music:</strong> {about.music}
        </p>
        <p className="mb-0">
            <strong>Movies:</strong> {about.movies}
        </p>
      </div>
    </div>
  );
};