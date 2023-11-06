import HeroSection from '../../../modules/servicePage/HeroSection'
import ServiceSect from '@/modules/servicePage/ServiceSect'


const whero = {
  title:'App Development',
  subtitle:' Our expert team combines design and functionality to create visually stunning and highly effective layout. We offer tailor-made solutions that ensure your online presence is engaging and capable of driving business growth. Whether it’s a responsive layout e-commerce platform, or a custom web application, we’re dedicated to delivering innovative, reliable, and user-friendly digital solutions that make an impact.',
  src:'/assets/app.jpg',
  h:'460px',
  align:'center'
}
const webService = {
  serviceName:'App Development',
  serviceData: [
    {
      title:'Front-end Development',
      src:'',
      descp:'Mastering front-end development for user-centric innovation.'
    },
    {
      title:'Back-end Development',
      src:'',
      descp:'We develop back-end solutions that are extensible, scalable, and easy to maintain.'
    },
    {
      title:'Full Stack Development',
      src:'',
      descp:'We provide full-spectrum App Development for the simple to high-performing back-end.'
    },
    {
      title:'WordPress Development',
      src:'',
      descp:'Excels in e-commerce site development, including WordPress-powered stores.'
    },
    {
      title:'Web App Development',
      src:'',
      descp:'We also builds web apps. We also provide services to maintain and update the app to fix bugs.'
    },
    {
      title:'Web Designing',
      src:'',
      descp:'Our expertise in web design ensures a delightful user experience.'
    },
  ],
}

const Page = () => {
  return (
    <>
      <HeroSection hero={whero} />
      <ServiceSect {...webService}/>
    </>
    )
  }

  export default Page;
