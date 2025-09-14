import './Home.css';  

function Home() {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h1>Hi, I'm <span>Huong</span></h1>
        <h2>Frontend Developer</h2>

        <p>
          Welcome to my Portfolio. <br /> I am Ngo Thi Huong – 
          an Information Technology student who is passionate about web development 
          and designing modern, user-friendly interfaces.
        </p>

        <div className="btn-group">
          <a href="#projects" className="btn"> Views Projects </a>
        </div>

        <div className="social-links">
          <a href="https://www.facebook.com/share/179FNZZGdJ/" target="_blank" rel="noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.instagram.com/bap_62.5?igsh=MWNyZjNob254ZGZleA==" target="_blank" rel="noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="mailto:example@gmail.com">
            <i className="fas fa-envelope"></i>
          </a>
          <a href="https://github.com/huongnt6205" target="_blank" rel="noreferrer">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>

      <div className="home-img">
        <span className="glow-effect"></span>
        <img src="/src/assets/image/avatar.jpg" alt="avatar" />
        <div className="corner top-left"></div>
        <div className="corner bottom-right"></div>
      </div>
    </section>
  );
}

export default Home;
