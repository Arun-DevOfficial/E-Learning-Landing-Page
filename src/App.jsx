import Header from "./Pages/Header";
import Company from "./Pages/Company";
import About from "./Pages/About";
import Features from "./Pages/Features";
import Newsletter from "./Pages/Newsletter";
import Footer from "./Pages/Footer";

function App() {
  return (
    <>
      <section className="bg-[#fff2e3] min-h-fit">
        <Header />
      </section>
      <Company />
      <About />
      <Features />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
