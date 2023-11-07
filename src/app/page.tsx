import OverviewSection from '@/modules/homePage/OverviewSection.jsx';
import HeroSection from '@/modules/homePage/HeroSection';
import ServicesSect from '@/modules/homePage/ServicesSection';
import VisionSection from '@/modules/homePage/VisionSection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <OverviewSection />
      <VisionSection />
      <ServicesSect />
    </>
  )
}
