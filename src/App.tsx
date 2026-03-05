import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import IntroStrip from './components/sections/IntroStrip';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Process from './components/sections/Process';
import WhyChooseUs from './components/sections/WhyChooseUs';
import Projects from './components/sections/Projects';
import Stats from './components/sections/Stats';
import CTABanner from './components/sections/CTABanner';

function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <main className="pt-[141px]">
        <Hero />
        <IntroStrip />
        <About />
        <Services />
        <Process />
        <WhyChooseUs />
        <Projects />
        <Stats />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
}

export default App;
