import TopNav from '@/pages/dashboard/shared/top-nav';
import SideNav from '@/pages/dashboard/shared/side-nav';

export default function Layout({ children }) {
  return (
    <>
      <TopNav />
      {children}
      <SideNav />
    </>
  );
}
