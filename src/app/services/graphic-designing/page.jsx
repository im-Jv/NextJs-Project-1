import HeroSection from '../../../modules/servicePage/HeroSection'
import ServiceSect from '@/modules/servicePage/ServiceSect'


const whero = {
  title:'Graphic Designing',
  subtitle:'It involves a dance between typography, imagery, and whitespace, crafting a symphony that resonates with the viewer. A good designer is a visual translator, distilling complex ideas into simple, elegant designs that speak a universal language. It’s not just about pixels and vectors; it’s about creating an experience that lingers in the mind.',
  src:'/assets/graphic.jpg',
  align:'center'
}
const webService = {
  serviceName:'Graphic Designing',
  serviceData: [
    {
      title:'Front-end Development',
      src:'/assets/icons/frontW.png',
      descp:'Mastering front-end development for user-centric innovation.'
    },
    {
      title:'Back-end Development',
      src:'/assets/icons/backW.png',
      descp:'We develop back-end solutions that are extensible, scalable, and easy to maintain.'
    },
    {
      title:'Full Stack Development',
      src:'/assets/icons/codeW.png',
      descp:'We provide full-spectrum web development for the simple to high-performing back-end.'
    },
    {
      title:'WordPress Development',
      src:'/assets/icons/WPw.png',
      descp:'Excels in e-commerce site development, including WordPress-powered stores.'
    },
    {
      title:'Web App Development',
      src:'/assets/icons/mob.png',
      descp:'We also builds web apps. We also provide services to maintain and update the app to fix bugs.'
    },
    {
      title:'Web Designing',
      src:'/assets/icons/brushW.png',
      descp:'Our expertise in web design ensures a delightful user experience.'
    },
  ],
}
const Page = () => {
  return (
    <>
    <head>
      <title>Graphic Designing - IT Company</title>
    </head>
      <HeroSection hero={whero} />
      <ServiceSect {...webService}/>
    </>
    )
  }

  export default Page;
