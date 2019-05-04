import Link from "next/link";
import Header from "../components/Header";
import Opening from "../components/Opening";
import Bio from "../components/Bio";
import Technology from "../components/Technology";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";

const Home = () => (
  <div>
    <Header />
    <Opening />
    <Bio />
    <Technology />
    <Portfolio />
    <Contact />
  </div>
);

export default Home;
