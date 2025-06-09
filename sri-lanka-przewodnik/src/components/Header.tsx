import { NavLink } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="app-header">
      <div className="container">
        <div className="logo">🌸 Sri Lanka Guide</div>
        <nav className="nav-menu">
          <NavLink to="/" className="nav-link">Start</NavLink>
          <NavLink to="/mapa" className="nav-link">Mapa</NavLink>
          <NavLink to="/miejsca" className="nav-link">Miejsca</NavLink>
          <NavLink to="/o-kraju" className="nav-link">O kraju</NavLink>
          <NavLink to="/kontakt" className="nav-link">Kontakt</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
