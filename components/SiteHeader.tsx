import Link from 'next/link';
import LandingThemeToggle from '@/components/LandingThemeToggle';

type NavKey =
  | 'home'
  | 'description'
  | 'download'
  | 'how-to-use'
  | 'technical'
  | 'decentralization'
  | 'who-uses-vx6'
  | 'sponsor'
  | 'future';

type SiteHeaderProps = {
  currentPage: NavKey;
};

export default function SiteHeader({ currentPage }: SiteHeaderProps) {
  return (
    <header className="hero-nav-wrap" aria-label="Main navigation">
      <div className="hero-nav-row">
        <Link href="/" className="site-wordmark" aria-label="VX6 home">
          VX6
        </Link>
        <nav className="hero-nav-links" aria-label="Primary">
          <Link href="/" id="nav-home" className={currentPage === 'home' ? 'active' : ''}>
            Home
          </Link>
          <Link
            href="/description"
            id="nav-description"
            className={currentPage === 'description' ? 'active' : ''}
          >
            Description
          </Link>
          <Link href="/download" id="nav-download" className={currentPage === 'download' ? 'active' : ''}>
            Download
          </Link>
          <Link
            href="/how-to-use"
            id="nav-use"
            className={currentPage === 'how-to-use' ? 'active' : ''}
          >
            How to Use
          </Link>
          <Link href="/technical" id="nav-tech" className={currentPage === 'technical' ? 'active' : ''}>
            Technical
          </Link>
          <Link
            href="/decentralization"
            id="nav-decentralization"
            className={currentPage === 'decentralization' ? 'active' : ''}
          >
            Decentralization
          </Link>
          <Link
            href="/who-uses-vx6"
            id="nav-who-uses"
            className={currentPage === 'who-uses-vx6' ? 'active' : ''}
          >
            Who Uses VX6
          </Link>
          <Link href="/sponsor" id="nav-sponsor" className={currentPage === 'sponsor' ? 'active' : ''}>
            Sponsor
          </Link>
          <Link href="/future" id="nav-future" className={currentPage === 'future' ? 'active' : ''}>
            Future
          </Link>
        </nav>
        <div className="hero-nav-toggle">
          <LandingThemeToggle />
          <a
            href="https://github.com/ethical-buddy/VX6"
            className="github-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <Link href="/sponsor" className="sponsor-nav-button" id="nav-sponsor-cta">
            Sponsor
          </Link>
        </div>
      </div>
    </header>
  );
}
