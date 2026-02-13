import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import SocialSidebar from '../components/Socialidebar';
import Footer from '../components/Footer';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <div className='relative pb-20 bg-white min-h-screen '>
      <Navbar />
      <Hero />
      <SocialSidebar />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
