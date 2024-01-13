import BelowHero from "./components/BelowHero";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";


const App = () => {
  return (
    <div className="bg-[#172227] font-[Inter] text-white font-myFont">

      <Navbar />
      <Hero />
      <BelowHero></BelowHero>
      <Footer />

    </div>
  )
}
export default App;
