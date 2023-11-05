import React from 'react';
import TimelineSect from '@/components/TimelineSect';

import { Box, Text } from '@chakra-ui/react';

const servicContent = [
  {
    stitle:'Web Development',
    sSrc:'/assets/icons/webDev.png',
    sDescp:'Find all the tools you’ll need to create advanced websites in one place. Stop waisting time searching for solutions.',
    sDir: false,
    sLink:'/',
  },
  {
    stitle:'App Development',
    sSrc:'/assets/icons/appDev.png',
    sDescp:'We strive to innovate when it comes to functionality. Our mission is to be the best, come and join the ride.',
    sDir: true,
    sLink:'/',
  },
  {
    stitle:'Graphic Designing',
    sSrc:'/assets/icons/brush.png',
    sDescp:'Its about harmonizing colors, shapes, and ideas to make a lasting impression in a fleeting glance.',
    sDir:false,
    sLink:'/',
  },
  {
    stitle:'SEO',
    sSrc:'/assets/icons/seo.png',
    sDescp:'Each and every one of our customers receives personalised assistance from our dedicated support team.',
    sDir:true,
    sLink:'/',
  },
  {
    stitle:'Digital Marketing',
    sSrc:'/assets/icons/digiMar.png',
    sDescp:'Each and every one of our customers receives personalised assistance from our dedicated support team.',
    sDir:false,
    sLink:'/',
  },

];


const ServicesSection = () => {
  return (
    <Box as='section' w="100%" px={{base:'40px', lg:'8%'}} py="24px">
      <Text textAlign="center" color="#244395" fontSize={{md:"2.5rem", base:'32px'}} fontWeight='500'>Services</Text>
      <Text textAlign="center" color="#33333" fontSize={{md:"1.6rem", base:'18px'}}>Select a service to see what we offer</Text>
      <Box  maxW="1446px" mx="auto" my="48px">
        {servicContent.map((sc, i)=>{
          return <TimelineSect key={i} rvrs={sc.sDir} sorce={sc.sSrc} slink={sc.sLink} sDescp={sc.sDescp} stitle={sc.stitle} />
        })

        }
      </Box>
    </Box>
  );
}

export default ServicesSection;
