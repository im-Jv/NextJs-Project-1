import HeroSect from '@/components/HeroSect';
import { Text, Box } from '@chakra-ui/react'

const tchero = {
  src: '/assets/privaypolicy.jpg',
  h: '400px',
  title: 'Terms and Condition',
  align: 'center'
}

const page = () => {
  return (
    <>
      <HeroSect {...tchero} />
      <Box maxW='1446px' mx='auto' px={{ base: '40px', lg: '8%' }} py='3rem'>
        <Text color='#2443A3' fontSize={{ md: '20px', base: '16px' }}>
          By accessing this web site, you are agreeing to be bound by these web site Terms and Conditions of Use, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.<br /><br />

          If you do not agree with any of these terms, you are prohibited from using or accessing this site.<br /><br />

          The materials contained in this web site are protected by applicable copyright and trade mark law.
        </Text>
      </Box>
    </>
  )
}

export default page;
