import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Stats from "./components/Stats";
import Campus from "./components/Campus";
import Academics from "./components/Academics";
import Sports from "./components/Sports";
import Testimonials from "./components/Testimonials";
import Admissions from "./components/Admissions";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import ScrollProgress from "./components/ScrollProgress";

function App() {
  return (
    <main>
      <ScrollProgress />
      <CustomCursor />
      <Navbar />

      <Hero />
      <About />
      <Stats />
      <Campus />
      <Academics />
      <Sports />
      <Testimonials />
      <Admissions />
      <Footer />
    </main>
  );
}

export default App;