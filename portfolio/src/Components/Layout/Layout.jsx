// src/components/Layout.jsx
import { NavBar } from '../NavBar/NavBar';

export function Layout({ children }) {
  const layoutStyle = {
    backgroundImage: "url('/assets/background.jpg')",
    width: "100%",
    backgroundAttachment: "fixed",
    backgroundRepeat: "repeat",
    backgroundSize: "cover",
    minHeight: "100vh",
    paddingTop: "20px",
    paddingBottom: "20px"
  };

  return (
    <div style={layoutStyle}>
      {/* This is the white header area */}
      <header className="container col-10 bg-white opacity-75 shadow-sm mb-4">
         {/* NAVBAR */}
         <NavBar />
      </header>

      {/* This is the main black box where the profile lives */}
      <main className="container col-10 bg-black p-3 main-profile-wrapper shadow">
        {children}
      </main>

      <footer className="container col-10 bg-white opacity-75 my-4 p-3 text-center shadow-sm">
        <p className="small mb-0">Built with love by Sarah — 2026</p>
      </footer>
    </div>
  );
}