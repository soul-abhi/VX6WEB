import Link from 'next/link';

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrapper">
        <div className="footer-inner">
          <div className="footer-credit">
            <p>VX6 is an IPv6-first peer-to-peer service network for localhost sharing, private routing, and direct service access.</p>
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
              <Link href="/sponsor">Sponsor</Link>
            </li>
            <li>
              <a href="https://github.com/ethical-buddy" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </li>
            <li>
              <a href="mailto:suryanshdeshwal@gmail.com">
                Email
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
