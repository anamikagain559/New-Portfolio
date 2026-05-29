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
            <div className="cv-role">UX/UI designer</div>
            <div className="cv-company">Axon.dev | Remote/Office | Oct 2021 - Nov 2023</div>
          </div>
          <div className="cv-item">
            <div className="cv-role">UX/UI designer</div>
            <div className="cv-company">Mediasparx | Remote | May 2020 - Oct 2021</div>
          </div>
          <div className="cv-item">
            <div className="cv-role">UX/UI designer - trainee</div>
            <div className="cv-company">Camtouch | Kyiv | Feb 2020 - Apr 2020</div>
          </div>
          <div className="cv-item">
            <div className="cv-role">FrontEnd developer</div>
            <div className="cv-company">Kyiv | Office | Apr 2018 - Jan 2020</div>
          </div>
        </div>

        <div>
          <h3 className="cv-section-title serif-heading">Education</h3>
          <div className="cv-item">
            <div className="cv-role">Alice K Web and mobile design course</div>
            <div className="cv-company">UX/UI design | Jun 2023 - current</div>
          </div>
          <div className="cv-item">
            <div className="cv-role">Mate Academy</div>
            <div className="cv-company">UX/UI design | Nov 2019 - Mar 2020</div>
          </div>
          <div className="cv-item">
            <div className="cv-role">Igor Sikorsky Kyiv Polytechnic Institute</div>
            <div className="cv-company">2014 - 2018, Bachelor</div>
          </div>
        </div>

        <div>
          <h3 className="cv-section-title serif-heading">Languages</h3>
          <div style={{ marginBottom: '2rem' }}>
            <p>Ukrainian</p>
            <p>Russian</p>
            <p>English (Upper intermediate)</p>
          </div>

          <h3 className="cv-section-title serif-heading">Contacts</h3>
          <div>
            <p>ligeka103@gmail.com</p>
            <p>+380994524603</p>
            <div className="social-links" style={{ marginTop: '1rem' }}>
              <a href="#">Be</a>
              <a href="#">In</a>
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
              <li>Prototyping</li>
              <li>Design system</li>
              <li>Atomic design methodology</li>
              <li>Responsive design</li>
              <li>Accessibility design</li>
              <li>Stakeholder interview</li>
            </ul>
            <ul style={{ color: 'var(--text-muted)', lineHeight: '2' }}>
              <li>User Flow</li>
              <li>User Interview</li>
              <li>Wireframing</li>
              <li>Usability Testing</li>
              <li>Product Design</li>
              <li>Mobile Design</li>
            </ul>
          </div>
        </div>
        <div>
          <h3 className="serif-heading" style={{ fontSize: '1.5rem', marginBottom: '1.5rem', borderBottom: '1px solid #333', paddingBottom: '1rem' }}>Instruments</h3>
          <div style={{ display: 'flex', gap: '4rem' }}>
            <ul style={{ color: 'var(--text-muted)', lineHeight: '2' }}>
              <li>Figma</li>
              <li>Adobe Photoshop</li>
              <li>Adobe XD</li>
              <li>Adobe Illustrator</li>
              <li>Maze</li>
              <li>Miro</li>
            </ul>
            <ul style={{ color: 'var(--text-muted)', lineHeight: '2' }}>
              <li>Google Analytics</li>
              <li>Jira</li>
              <li>Webflow</li>
              <li>HTML, CSS, JS</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
