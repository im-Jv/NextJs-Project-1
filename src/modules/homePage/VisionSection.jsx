import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';

const VisionSection = () => {
    return (
        <Flex as='section' align='center' bgImage='/assets/heroBg.jpeg' bgAttachment='fixed' bgSize='cover' bgPos='bottom' bgBlendMode='darken' bgColor='#0000009a' bgRepeat='no-repeat' px='8.5%'>
            <Flex justifyContent='space-evenly' h='490px' py='30px' flexDir='column' maxW='1446px' mx='auto' color='white' fontFamily='heading.100'>
                <Box>
                    <Text lineHeight='80px' fontSize={{ md: '40px', base: '32px' }} fontWeight='500'>Our Vision</Text>
                    <Text lineHeight='36px' fontSize={{ md: '20px', base: '16px' }}>DEMO IT SOLUTIONS technology to revolutionize businesses by promoting growth, efficiency, and creativity. We want to be the catalyst that connects goals and accomplishments.</Text>
                </Box>
                <Box>
                    <Text lineHeight='80px' fontSize={{ md: '40px', base: '32px' }} fontWeight='500'>Our Mission</Text>
                    <Text lineHeight='36px' fontSize={{ md: '20px', base: '16px' }}>DEMO IT SOLUTIONS mission is to deliver cutting-edge solutions and drive growth as trusted digital partners. Navigating digital landscapes and exceeding expectations with tailored solutions is our forte.</Text>
                </Box>
            </Flex>
        </Flex>
    );
}

export default VisionSection;
