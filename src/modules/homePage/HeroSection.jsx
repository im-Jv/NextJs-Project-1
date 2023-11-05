
import HeroSect from '@/components/HeroSect';


const hero = {
  title:'Experience, Not Experiment',
  subtitle:'DEMO IT Solutions, your gateway to innovative technology solutions, specializes in empowering businesses for the digital age, offering a journey to transform your landscape. Join us to transform for limitless possibilities.',
  src:'/assets/heroBg.jpeg',
  h:'530px'
}

const HeroSection = () => {
  return (
    <HeroSect title={hero.title} h={hero.h} align='start' src={hero.src} subtitle={hero.subtitle} />
  );
}

export default HeroSection;
