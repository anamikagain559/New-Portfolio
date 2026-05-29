export default function Footer() {
  return (
    <footer className="footer container" style={{ padding: '2rem 0' }}>
      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        <span>ligeka103@gmail.com</span>
        <div className="social-links" style={{ color: 'var(--text-main)' }}>
          <a href="#">Dribbble</a>
          <a href="#">Insta</a>
          <a href="#">In</a>
          <a href="#">Be</a>
        </div>
      </div>
      <div>
        <span>©2024 Lisa Karahodina</span>
      </div>
    </footer>
  );
}
