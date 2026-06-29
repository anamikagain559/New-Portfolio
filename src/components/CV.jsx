export default function CV() {
  return (
    <section className="container section-spacing">
      <h2 className="serif-heading" style={{ fontSize: 'clamp(4rem, 8vw, 6rem)', marginBottom: '6rem' }}>
        CV<span className="accent-star" style={{ position: 'relative', top: '-20px' }}>✦</span>
      </h2>
      
      <div className="cv-grid">
        <div>
          <h3 className="cv-section-title serif-heading">Work experience</h3>
          <div className="cv-item">
            <div className="cv-role">Junior Fullstack Developer</div>
            <div className="cv-company">Zaimah Technologies Limited | Dec 2022 - Apr 2023</div>
          </div>
          <div className="cv-item">
            <div className="cv-role">Freelance Developer</div>
            <div className="cv-company">Self-employed | 2018 - Present</div>
          </div>
        </div>

        <div>
          <h3 className="cv-section-title serif-heading">Education</h3>
          <div className="cv-item">
            <div className="cv-role">Bachelor of Computer Science and Engineering</div>
            <div className="cv-company">Bangabandhu Sheikh Mujibur Rahman Science and Technology University | Jan 2016 - Dec 2020</div>
          </div>
          <div className="cv-item">
            <div className="cv-role">H. S. C</div>
            <div className="cv-company">Khulna Collegiate Girls' School & KCC Women's College | Jan 2012 - Dec 2014</div>
          </div>
          <div className="cv-item">
            <div className="cv-role">S. S. C</div>
            <div className="cv-company">G G K H Kanai Lal High School | Jan 2007 - Dec 2012</div>
          </div>
        </div>

        <div>
          <h3 className="cv-section-title serif-heading">Languages</h3>
          <div style={{ marginBottom: '2rem' }}>
            <p>Bengali (Native)</p>
            <p>English (Fluent)</p>
          </div>

          <h3 className="cv-section-title serif-heading">Contacts</h3>
          <div>
            <p>anamikagain559@gmail.com</p>
            <div className="social-links" style={{ marginTop: '1rem' }}>
              <a href="https://github.com/anamikagain559" target="_blank" rel="noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/anamika-anu/" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>

      <h2 className="serif-heading" style={{ fontSize: 'clamp(3rem, 6vw, 4rem)', marginTop: '8rem' }}>
        Competences
      </h2>
      <div className="competence-grid">
        <div>
          <h3 className="serif-heading" style={{ fontSize: '1.5rem', marginBottom: '1.5rem', borderBottom: '1px solid #333', paddingBottom: '1rem' }}>Industry Knowledge</h3>
          <div style={{ display: 'flex', gap: '4rem' }}>
            <ul style={{ color: 'var(--text-muted)', lineHeight: '2' }}>
              <li>Frontend Architecture</li>
              <li>Backend Architecture</li>
              <li>Database Design</li>
              <li>REST API Design</li>
              <li>Authentication</li>
              <li>Responsive Design</li>
            </ul>
            <ul style={{ color: 'var(--text-muted)', lineHeight: '2' }}>
              <li>State Management</li>
              <li>Agile Methodologies</li>
              <li>Version Control</li>
              <li>UI/UX Implementation</li>
              <li>Web Performance</li>
              <li>Problem Solving</li>
            </ul>
          </div>
        </div>
        <div>
          <h3 className="serif-heading" style={{ fontSize: '1.5rem', marginBottom: '1.5rem', borderBottom: '1px solid #333', paddingBottom: '1rem' }}>Technologies</h3>
          <div style={{ display: 'flex', gap: '4rem' }}>
            <ul style={{ color: 'var(--text-muted)', lineHeight: '2' }}>
              <li>React.js</li>
              <li>Next.js</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>Laravel</li>
              <li>Tailwind CSS</li>
            </ul>
            <ul style={{ color: 'var(--text-muted)', lineHeight: '2' }}>
              <li>MongoDB</li>
              <li>MySQL</li>
              <li>Firebase</li>
              <li>TypeScript</li>
              <li>Git / GitHub</li>
              <li>Redux</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
