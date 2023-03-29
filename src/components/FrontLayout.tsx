import Header from '@/pages/welcome/header';
import Footer from '@/pages/welcome/footer';

export default function FrontLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
