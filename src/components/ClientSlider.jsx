'use client';

import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import {Box, Flex, Image, Text} from '@chakra-ui/react'

const clints = [
  '/assets/parinda.png',
  '/assets/alphaStore.png',
  '/assets/CHD.png',
  '/assets/yep.png',
]

export default function SimpleSlider() {
    const settings = {
      arrows: false,
      infinite: true,
      autoplay: true,
      pauseOnHover:false,
      speed: 500,
      slidesToShow: 2.3,
      slidesToScroll: 1,

    };
    return (
      <Box maxW='1440px' mx='auto' my='50px'>
        <Box w='100%'>
          <Slider centerMode {...settings}>
              {clints.map((c,i)=>{
                return (
                  <Flex key={i} w='max-content' p='20px'>
                    <Image src={c} alt='img' h='100px' p='20px' w='250px' mx='auto' objectFit='contain' />
                  </Flex>
                )
              })}
          </Slider>
        </Box>
      </Box>
    );
  }
