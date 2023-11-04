
import { Box, Flex, Text } from '@chakra-ui/react'

const HeroSect = (prop) => {
  return (
    <Box as='header' width='100%' px={{base:'40px', lg:'38px'}} bgBlendMode='color-burn' bgColor='#0a0a0a9b' bgImage='/assets/heroBg.jpeg' bgPos='center' bgSize='cover' bgRepeat='no-repeat'>
      <Flex h='620px' maxW='1446px' mx='auto' px='6%' align='center' >
        <Box color='white'>
          <Text fontSize='3.4rem' fontWeight='700'>{prop.title}</Text>
          <Text fontSize='1.3rem' m='0.5'>{prop.subtitle}</Text>
        </Box>
      </Flex>
    </Box>
  );
}

export default HeroSect;
