import Header from '@/components/Header';
import Hero from '@/components/sections/Hero';
import Products from '@/components/sections/Products';
import Capabilities from '@/components/sections/Capabilities';
import Clients from '@/components/sections/Clients';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Products />
      <Capabilities />
      <Clients />
      <WhyChooseUs />
      <Contact />
      <Footer />
    </main>
  );
}
