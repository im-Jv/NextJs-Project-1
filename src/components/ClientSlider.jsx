'use client';

// import { Carousel } from "react-responsive-carousel";
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Slider from "react-slick";
import { Box, Flex, Text, Image } from '@chakra-ui/react';

const ClientSlider = () => {
  return (
    <Box h='400px' as="section">
      <Text> Single Item</Text>
      <Slider variableWidth slidesPerRow={1} slidesToShow={2} autoplay infinite dots>
        <Box h='50px'>
          <Image w='100%' h='100%' objectFit='contain' src="/assets/parinda.png" alt="img"/>
        </Box>
        <Box h='50px'>
          <Image w='100%' h='100%' objectFit='contain' src="/assets/parinda.png" alt="img"/>
        </Box>
      </Slider>
      {/* <Carousel s showIndicators={false} autoPlay showArrows infiniteLoop>
        <Box h='50px'>
          <Image w='100%' h='100%' objectFit='contain' src="/assets/parinda.png" alt="img"/>
        </Box>
        <Box h='50px'>
          <Image w='100%' h='100%' objectFit='contain' src="/assets/parinda.png" alt="img"/>
        </Box>
        <Box h='50px'>
          <Image w='100%' h='100%' objectFit='contain' src="/assets/parinda.png" alt="img"/>
        </Box>
        <Box h='50px' bg='red'>
          <Image w='100%' h='100%' objectFit='contain' src="/assets/parinda.png" alt="img"/>
        </Box>
      </Carousel> */}
    </Box>
  );
}

export default ClientSlider;
