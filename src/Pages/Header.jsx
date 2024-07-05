import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";

export default function Header() {
  return (
    <>
      <div className="container mx-auto rounded-b-full">
        <Navbar />
        <Hero />
      </div>
    </>
  );
}
