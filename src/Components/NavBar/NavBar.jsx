// src/components/Navbar.jsx
export function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        {/* Placeholder for your logo or MySpace-style text */}
        <a className="navbar-brand fw-bold" href="#">
          <img 
            src="assets/pixel-art-woman-working-with-laptop.jpg" 
            alt="Coding Girl Icon"
            height="35" 
            className="d-inline-block align-items-center" 
          />
        </a>
        
        {/* The Hamburger Button for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* The Links - these collapse on small screens */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">About Me</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#posts">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#top-8">Skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact-sarah">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}