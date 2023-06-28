import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header, { HeaderPhone } from "./components/Header";
import Home from './components/Home';
import Services from './components/Services';
import Timeline from './components/Timeline';
import Work from './components/Work';
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [ratio, setRatio] = useState(window.innerWidth / window.innerHeight);
  useEffect(() => {
    const resizeRatio = () => {
      setRatio(window.innerWidth / window.innerHeight);
    };

    window.addEventListener("resize", resizeRatio);

    return () => {
      window.removeEventListener("resize", resizeRatio);
    };
  }, [ratio]);

  return (
    <>
      <HeaderPhone menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home ratio={ratio} />
      <Work />
      <Timeline />
      <Services />
      
      <Contact />
      <Footer />
      <Toaster />
    </>
  ) 
}

export default App