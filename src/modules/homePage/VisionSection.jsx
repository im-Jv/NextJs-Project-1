import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';

const VisionSection = () => {
    return (
        <Flex align='center' h='600px' bgImage='/assets/heroBg.jpeg' bgAttachment='fixed' bgSize='cover' bgPos='bottom' bgBlendMode='darken' bgColor='#0000009a' bgRepeat='no-repeat' px='8%'>
            <Box  maxW='1446px' mx='auto' color='white'>
                <Text fontSize={{md:'3.2rem', base:'32px'}}  fontWeight='500'>Our Vision</Text>
                <Text fontSize={{md:'1.3rem', base:'16px'}}mb={{md:'0', base:'20px'}}>DEMO IT SOLUTIONS technology to revolutionize businesses by promoting growth, efficiency, and creativity. We want to be the catalyst that connects goals and accomplishments.</Text>
                <Text fontSize={{md:'3.2rem', base:'32px'}} mb='0' fontWeight='500'>Our Mission</Text>
                <Text fontSize={{md:'1.3rem', base:'16px'}}>DEMO IT SOLUTIONS mission is to deliver cutting-edge solutions and drive growth as trusted digital partners. Navigating digital landscapes and exceeding expectations with tailored solutions is our forte.</Text>
            </Box>
        </Flex>
    );
}

export default VisionSection;
