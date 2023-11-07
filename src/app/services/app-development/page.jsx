import HeroSection from '../../../modules/servicePage/HeroSection'
import ServiceSect from '@/modules/servicePage/ServiceSect'


const whero = {
  title:'App Development',
  subtitle:'Our expert team combines design and functionality to create visually stunning and highly effective layout. We offer tailor-made solutions that ensure your online presence is engaging and capable of driving business growth. Whether it’s a responsive layout e-commerce platform, or a custom web application, we’re dedicated to delivering innovative, reliable, and user-friendly digital solutions that make an impact.',
  src:'/assets/app.jpg',
  h:'460px',
  align:'center'
}
const webService = {
  serviceName:'App Development',
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
      descp:'We provide full-spectrum App development for the simple to high-performing back-end.'
    },
    {
      title:'WordPress Development',
      src:'/assets/icons/WPw.png',
      descp:'Excels in e-commerce site development, including WordPress-powered stores.'
    },
    {
      title:'App App Development',
      src:'/assets/icons/mob.png',
      descp:'We also builds App apps. We also provide services to maintain and update the app to fix bugs.'
    },
    {
      title:'App Designing',
      src:'/assets/icons/brushW.png',
      descp:'Our expertise in App design ensures a delightful user experience.'
    },
  ],
}

const Page = () => {
  return (
    <>
    <head>
      <title>App Development - IT Company</title>
    </head>
      <HeroSection hero={whero} />
      <ServiceSect {...webService}/>
    </>
    )
  }

  export default Page;
