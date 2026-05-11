import Link from 'next/link';

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrapper">
        <div className="footer-inner">
          <div className="footer-credit">
            <p>
              VX6 is a decentralized service and communication fabric for localhost-native products,
              internal service meshes, and enterprise-grade private networking.
            </p>
            <p>
              For corporate or business deployment support, contact the maintainer directly. To support
              the mission of reducing centralized cloud hosting cost, consider sponsoring the project.
            </p>
            <div className="footer-contact-stack" aria-label="Project contact links">
              <a href="mailto:suryanshdeshwal@gmail.com">suryanshdeshwal@gmail.com</a>
              <a href="https://github.com/ethical-buddy" target="_blank" rel="noopener noreferrer">
                github.com/ethical-buddy
              </a>
              <a href="https://github.com/sponsors/ethical-buddy" target="_blank" rel="noopener noreferrer">
                Donate / Sponsor VX6
              </a>
            </div>
          </div>
          <ul className="footer-links" role="list">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/description">Description</Link>
            </li>
            <li>
              <Link href="/download">Download</Link>
            </li>
            <li>
              <Link href="/how-to-use">How to Use</Link>
            </li>
            <li>
              <Link href="/technical">Technical</Link>
            </li>
            <li>
              <Link href="/decentralization">Decentralization</Link>
            </li>
            <li>
              <Link href="/who-uses-vx6">Who Uses VX6</Link>
            </li>
            <li>
              <Link href="/sponsor">Sponsors</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
