'use client';

import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { Box, Flex, Image, Text } from '@chakra-ui/react'

const settings = {
  arrows: false,
  infinite: true,
  autoplay: true,
  pauseOnHover: false,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 830,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 580,
      settings: {
        slidesToShow: 1,
        dots: true,
      }
    }
  ]
};

const ServiceSect = ({ serviceName, serviceData }) => {
  return (
    <Box as="section" width='100%' px={{ base: '40px', lg: '8.5%' }}>
      <Box maxW='1446px' mx='auto' my='3rem'>
        <Text textAlign='center' fontWeight='500' my='2rem' fontSize={{ md: '2.6rem', base: '32px' }} color='primary.100'>Our {serviceName} Services</Text>
        <Box h='max-content' ms='50px'>
          <Slider {...settings} cssEase="ease-in-out">
            {serviceData.map((s, i) => {
              return (
                <Box w='100%' key={i} mb='10px'>
                  <Flex w='90%' mr='20px' h='350px' border='1px' borderColor='primary.100' p='20px' flexDir='column' justify='center' align='center' textAlign='center'>
                    <Box bgColor='primary.100' p='.8rem' mb='1rem' borderRadius='50%' h='3.5rem' w='3.5rem'>
                      <Image alt="img" src={s.src} />
                    </Box>
                    <Text color='primary.100' width='80%' mx='auto' fontSize='1.3rem' fontWeight='500' >{s.title}
                      <Box width='2rem' h='4px' my='1rem' mx='auto' bgColor='#CCCCCC'></Box>
                    </Text>
                    <Text>{s.descp}</Text>
                  </Flex>
                </Box>)
            })}
          </Slider>
        </Box>
      </Box>
    </Box>
  );
}

export default ServiceSect;
