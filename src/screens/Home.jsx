import Features from "../components/Features.jsx";
import Header from "../components/Header.jsx";
import NavBar from "../components/NavBar.jsx";
import SocialProof from "../components/SocialProof.jsx";

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="container text-center">
        <Header />
        <SocialProof />
        <Features />
      </div>

    </>
  )
}
