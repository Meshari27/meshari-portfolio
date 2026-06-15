function About() {
  return (
    <section className="about-section">
      <div className="about-header">
        <p className="small-title">About Me</p>
        <h1>Who I Am</h1>
      </div>

      <p>
        My name is Meshari Althubyani, and I am intersted in web developement, enterprice applications, and automation.
      </p>

      <p>
        This is a protfolio about my eduction, skills, and experience.
      </p>

      <div className="info-grid">
        <div className="info-card">
          <h3>Eduction</h3>
          <p>Kent State University - Bacholar in Computer Information Systems.</p>
          <p>Boston University -  Attending Computer Science in Software Developement.</p>
        </div>


        <div className="info-card">
          <h3>Technical Skills</h3>
          <p>Python, Database Management, Business Application, ServiceNow Developer, and learning Javascript and React. </p>
        </div>

        <div className="info-card">
          <h3>Experience</h3>
          <p>I have 5 years of experince in Business Applications, and 3 years of experience in ServiceNow developement and intergration.</p>
        </div>

        <div className="info-card">
          <h3>Hubbies</h3>
          <p>I like to travel to new places, Videogames, and family gatherings.</p>
        </div>


      </div>
    </section>
  );
}

export default About;