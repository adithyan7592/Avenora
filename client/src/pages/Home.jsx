import Hero from "../components/Hero.jsx";
import ServicesGrid from "../components/ServicesGrid.jsx";
import StatsSection from "../components/StatsSection.jsx";
import TrustBar from "../components/TrustBar.jsx";
import GallerySection from "../components/GallerySection.jsx";
import useContent from "../hooks/useContent.js";

export default function Home() {
  const { services, stats } = useContent();

  return (
    <>
      <Hero />
      <ServicesGrid services={services} />
      <GallerySection compact />
      <StatsSection stats={stats} />
      <TrustBar />
    </>
  );
}
