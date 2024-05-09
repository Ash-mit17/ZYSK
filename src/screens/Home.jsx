import Blog from "../components/Blog.jsx";
import CTA from "../components/CTA.jsx";
import FAQ from "../components/FAQ.jsx";
import Features from "../components/Features.jsx";
import Features1 from "../components/Features1.jsx";
import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";
import NavBar from "../components/NavBar.jsx";
import SocialProof from "../components/SocialProof.jsx";
import Testimonial from "../components/Testimonial.jsx";

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="container text-center">
        <Header />
        <SocialProof />
        <Features />
        <Testimonial />
        <Features1 />
        <FAQ />
        <Blog />
        <CTA />
      </div>
      <Footer />
    </>
  )
}
