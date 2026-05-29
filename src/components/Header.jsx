export default function Header() {
  return (
    <header className="header-nav container">
      <div className="serif-heading" style={{ fontSize: '1.2rem' }}>Lisa Karahodina</div>
      <div className="header-links">
        <a href="#cases">Cases</a>
        <a href="#services">Services</a>
        <a href="#contacts">Contacts</a>
      </div>
      <div className="social-links">
        <a href="#">En ⌄</a>
        <span style={{ color: 'var(--text-muted)' }}>|</span>
        <a href="#">Be</a>
        <a href="#">In</a>
      </div>
    </header>
  );
}
