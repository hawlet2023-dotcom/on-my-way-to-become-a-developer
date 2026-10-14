import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import WhyChooseUs from "./components/WhyChooseUs";
import PopularResidences from "./components/PopularResidences";
import About from "./components/About";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Navbar />
      <HomePage />
      <WhyChooseUs />
      <PopularResidences />
      <About/>
      <Footer/>
    </>
  );
}

export default App;