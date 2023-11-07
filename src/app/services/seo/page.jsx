import HeroSection from '../../../modules/servicePage/HeroSection'
import ServiceSect from '@/modules/servicePage/ServiceSect'


const whero = {
  title:'SEO',
  subtitle:'Our expert team combines design and functionality to create visually stunning and highly effective websites. We offer tailor-made solutions that ensure your online presence is engaging and capable of driving business growth. Whether it’s a responsive website, e-commerce platform, or a custom web application, we’re dedicated to delivering innovative, reliable, and user-friendly digital solutions that make an impact.',
  src:'/assets/seo.jpg',
  align:'center'
}
const webService = {
  serviceName:'SEO',
  serviceData: [
    {
      title:'Technical SEO',
      src:'/assets/icons/frontW.png',
      descp:'Mastering Technical SEO for user-centric innovation.'
    },
    {
      title:'Content Writing',
      src:'/assets/icons/backW.png',
      descp:'We develop Content solutions that are extensible, scalable, and easy to maintain.'
    },
    {
      title:'On-Page & Off-Page SEO',
      src:'/assets/icons/codeW.png',
      descp:'We provide full-spectrum SEO for the simple to high-performing back-end.'
    },
    {
      title:'Competitor Analysis',
      src:'/assets/icons/WPw.png',
      descp:'Excels in e-commerce site development, including WordPress-powered stores.'
    },
    {
      title:'SEO Audit',
      src:'/assets/icons/mob.png',
      descp:'We also builds web apps. We also provide services to maintain and update the app to fix bugs.'
    },
    {
      title:'Panelty Recovery',
      src:'/assets/icons/brushW.png',
      descp:'Our expertise in web design ensures a delightful user experience.'
    },
  ],
}

const Page = () => {
  return (
    <>
    <head>
      <title>SEO - IT Company</title>
    </head>
      <HeroSection hero={whero}/>
      <ServiceSect {...webService}/>
    </>
    )
  }

  export default Page;
