import Header from '@/pages/welcome/header';
import Footer from '@/pages/welcome/footer';
import About from '@/pages/welcome/about';
import Services from '@/pages/welcome/services';
import Contact from '@/pages/welcome/contact';

export default function Welcome() {
  return (
    <>
      {/*  Main Page start here */}
      <div>
        <Header />
        <About />
        <Services />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
