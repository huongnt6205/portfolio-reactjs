import './Navigation.css';

function Navigation() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/src/assets/image/logo.jpg" alt="logo" />
      </div>

      <div className="nav">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#album">Album</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#repository">Repository</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
