import { CONTACT_LINKS } from '../../data';

export function ContactBox() {
  return (
    <div className="card border-black mb-4" id="contact-sarah">
      <div className="card-header bg-primary text-white fw-bold py-1">
        Contacting Sarah:
      </div>
      <div className="card-body bg-white">
        <div className="row g-2">
          {CONTACT_LINKS.map((link) => (
            <div className="col-6" key={link.label}>
              <a
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="text-decoration-none d-block mb-2"
              >
                <img
                  src={link.icon}
                  alt={link.label}
                  width="18"
                  className="me-2"
                />
                <span className="small text-primary">{link.label}</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}