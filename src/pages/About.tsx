import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AboutSection from "@/components/sections/AboutSection";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
};

export default About;