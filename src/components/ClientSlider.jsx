'use client';

import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Box, Flex, Image, Text } from '@chakra-ui/react'

const clints = [
  '/assets/parinda.png',
  '/assets/alphaStore.png',
  '/assets/bsa.png',
  '/assets/skin-shop.png',
  '/assets/CHD.png',
  '/assets/yep.png',
]

export default function SimpleSlider() {
  const settings = {
    arrows: false,
    infinite: true,
    autoplay: true,
    pauseOnHover: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 830,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 530,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  };
  return (
    <Box maxW='1440px' mx='auto' my='7rem'>
      <Box w='100%'>
        <Slider className="client" {...settings}>
          {clints.map((c, i) => {
            return (
              <Flex key={i} w='100%' ms='20px'>
                <Image src={c} alt='img' w={{ md: '100px', base: '100%' }} h='70px' objectFit='contain' />
              </Flex>
            )
          })}
        </Slider>
      </Box>
    </Box>
  );
}
