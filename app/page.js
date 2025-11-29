import Image from "next/image";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from "./components/About";
import WorkSection from "./components/WorkSection";
import Services from "./components/Services";
import ContactMe from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
    <Navbar/>
    <Header/>
    <AboutMe />
    <WorkSection/>
    <Services/>
    <ContactMe/>
    <Footer/>
    </>
  );
}
