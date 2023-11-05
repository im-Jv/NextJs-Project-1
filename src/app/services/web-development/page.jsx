import HeroSect from "@/components/HeroSect";

const hero = {
  title:'Web Development',
  subtitle:' Our expert team combines design and functionality to create visually stunning and highly effective websites. We offer tailor-made solutions that ensure your online presence is engaging and capable of driving business growth. Whether it’s a responsive website, e-commerce platform, or a custom web application, we’re dedicated to delivering innovative, reliable, and user-friendly digital solutions that make an impact.',
  src:'/assets/web.jpg',
  h:'460px'
}


const Webdevelopment = () => {
  return (
    <>
      <HeroSect title={hero.title} h={hero.h} align='center' src={hero.src} subtitle={hero.subtitle} />

    </>
    )
  }

  export default Webdevelopment
