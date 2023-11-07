import { Box, Flex, Text } from '@chakra-ui/react'

const HeroSect = ({ src, h, align, title, subtitle }) => {
  return (
    <Box as='header' width='100%' px={{ base: '38px', lg: '8.5%' }} mt='80px' bgBlendMode='color-burn' bgColor='#0000009b' bgImage={src} bgPos='center' bgSize='cover' bgRepeat='no-repeat'>
      <Flex h={h} maxW='1446px' mx='auto' align='center'>
        <Box color='white' width='100%'>
          <Text fontSize={{ md: '48px', base: '38px' }} textAlign={align} fontFamily='heading.100' fontWeight='600'>{title}</Text>
          <Text fontSize={{ md: '24px', base: '16px' }} fontFamily='text.100' m='0.5'>{subtitle}</Text>
        </Box>
      </Flex>
    </Box>
  );
}

export default HeroSect;
