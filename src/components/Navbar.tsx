import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <header className="site-header">
      <nav className="navbar">
        <h2 className="logo">Meshari Althubyani Portfolio</h2>

        <div className="nav-links">
          <NavLink end to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Home
          </NavLink>

          <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            About
          </NavLink>

          <NavLink to="/skills" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Skills
          </NavLink>

          <NavLink to="/projects" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Projects
          </NavLink>

          <NavLink to="/resume" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Resume
          </NavLink>

      

          <NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Contact
          </NavLink>


          <NavLink to="/messages" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Messages
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;