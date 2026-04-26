import Image from 'next/image';
import Link from 'next/link';
import LandingThemeToggle from '@/components/LandingThemeToggle';
import vx6Logo from '@/assets/logo.png';
import vx6Logo2 from '@/assets/logo2.png';

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
          <Image src={vx6Logo} alt="VX6" className="site-logo-image site-logo-mark" priority />
          <Image src={vx6Logo2} alt="VX6" className="site-logo-image site-logo-word" priority />
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
          <a
            id="sponsor-profile-button"
            href="https://github.com/sponsors/ethical-buddy"
            aria-label="Sponsor @ethical-buddy"
            className="sponsor-nav-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="sponsor-button-content">
              <span className="sponsor-button-label">
                <svg
                  aria-hidden="true"
                  height="16"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  className="sponsor-heart-icon"
                >
                  <path d="m8 14.25.345.666a.75.75 0 0 1-.69 0l-.008-.004-.018-.01a7.152 7.152 0 0 1-.31-.17 22.055 22.055 0 0 1-3.434-2.414C2.045 10.731 0 8.35 0 5.5 0 2.836 2.086 1 4.25 1 5.797 1 7.153 1.802 8 3.02 8.847 1.802 10.203 1 11.75 1 13.914 1 16 2.836 16 5.5c0 2.85-2.045 5.231-3.885 6.818a22.066 22.066 0 0 1-3.744 2.584l-.018.01-.006.003h-.002ZM4.25 2.5c-1.336 0-2.75 1.164-2.75 3 0 2.15 1.58 4.144 3.365 5.682A20.58 20.58 0 0 0 8 13.393a20.58 20.58 0 0 0 3.135-2.211C12.92 9.644 14.5 7.65 14.5 5.5c0-1.836-1.414-3-2.75-3-1.373 0-2.609.986-3.029 2.456a.749.749 0 0 1-1.442 0C6.859 3.486 5.623 2.5 4.25 2.5Z" />
                </svg>
                <span className="sponsor-button-text">Sponsor</span>
              </span>
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}
