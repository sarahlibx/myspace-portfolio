// src/components/ProjectCard.jsx
export function ProjectCard({ title, link, img, desc }) {
  return (
    <div className="card-body border-bottom" id="posts">
      <div className="text-center">
        <h3 className="h5">{title}</h3>
        <a href={link} target="_blank" rel="noreferrer">
          <img src={img} className="img-fluid border mb-2" width="300" alt={title} />
        </a>
        <p className="small mx-5">{desc}</p>
      </div>
    </div>
  );
}
