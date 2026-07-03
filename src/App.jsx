import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Menu from "./components/Menu";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Location from "./components/Location";
import Footer from "./components/Footer";
import WhatsappButton from "./components/WhatsappButton";
import { restaurant } from "./data";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Menu />
        <Gallery />
        <Testimonials />
        <Location />
        <section className="final-cta section" aria-labelledby="cta-title">
          <p className="eyebrow">Mesa, antojo o pedido</p>
          <h2 id="cta-title">Puerto 23 está listo para tu próxima ronda de mariscos.</h2>
          <a className="button primary" href={restaurant.whatsapp} target="_blank" rel="noreferrer">Escribir por WhatsApp</a>
        </section>
      </main>
      <Footer />
      <WhatsappButton />
    </div>
  );
}
