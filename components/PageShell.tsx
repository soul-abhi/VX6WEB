import type { ReactNode } from 'react';
import SiteFooter from '@/components/SiteFooter';
import SiteHeader from '@/components/SiteHeader';

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

type PageShellProps = {
  currentPage: NavKey;
  children: ReactNode;
};

export default function PageShell({ currentPage, children }: PageShellProps) {
  return (
    <>
      <SiteHeader currentPage={currentPage} />
      {children}
      <SiteFooter />
    </>
  );
}
