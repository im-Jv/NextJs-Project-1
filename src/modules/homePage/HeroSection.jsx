
import HeroSect from '@/components/HeroSection';

const hero = {
  title:'Experience, Not Experiment',
  subtitle:'DEMO IT Solutions, your gateway to innovative technology solutions, specializes in empowering businesses for the digital age, offering a journey to transform your landscape. Join us to transform for limitless possibilities.',
}

const HeroSection = (prop) => {
  return (
    <HeroSect title={hero.title} subtitle={hero.subtitle} />
  );
}

export default HeroSection;
