import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="hero-section">
      <div>
        <p className="small-title">Final Project</p>

        <h1>Hello, I am Meshari Althubyani</h1>

        <p>
          Application Development Specialist focused on building secure, scalable enterprise solutions and API-driven
system integrations. Experienced in automating workflows, developing custom applications, and enabling
data-driven insights across departments.
        </p>

        <div className="hero-buttons">
          <Link to="/projects" className="primary-button">
          Project View
          </Link>


          <Link to="/contact" className="second-button">
          Contact Me
          </Link>

        

        </div>

      


      </div>
    </section>
  );
}


export default Home;