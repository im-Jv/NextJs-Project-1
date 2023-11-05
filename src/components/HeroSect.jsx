
import { Box, Flex, Text } from '@chakra-ui/react'

const HeroSect = ({src, h, align, title, subtitle}) => {
  return (
    <Box as='header' width='100%' px={{base:'38px', lg:'38px'}} bgBlendMode='color-burn' bgColor='#000000c1' bgImage={src} bgPos='center' bgSize='cover' bgRepeat='no-repeat'>
      <Flex h={{md:{h}, base:'500px'}} maxW='1446px' mx='auto' px='6%' align='center' >
        <Box color='white' width='100%'>
          <Text fontSize={{md:'3.4rem', base:'38px'}} textAlign={align} fontWeight='700'>{title}</Text>
          <Text fontSize={{md:'1.3rem', base:'16px'}} m='0.5'>{subtitle}</Text>
        </Box>
      </Flex>
    </Box>
  );
}

export default HeroSect;
