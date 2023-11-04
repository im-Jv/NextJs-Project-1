
import {Box,Flex,Text,Image} from '@chakra-ui/react';
import ClientSlider from '@/components/ClientSlider';

const OverviewSection = () => {
    return (
      <Box as='section' h='max-content' px='8%'>
      <Flex my='3rem' maxW='1446px' align="center" justify="space-between" mx='auto'>
          <Box w='50%'>
            <Text fontSize='2.7rem' m='0' color='#244395'>
              Managed IT For Small To Midsize Businesses
            </Text>
            <Text fontSize='1.2rem' color='#7E93B6'>
              Preventing tech-induced headaches and data security threats isn’t your job—it’s ours. For over two decades, we’ve stepped in with managed solutions to provide businesses with a firm IT foundation to stand on. We’ll protect your business and your data, so all you’ll need to focus on is getting the job done.
            </Text>
          </Box>
          <Image src='/assets/sec2.jpeg' objectFit='contain' width='50%' px="1rem" ms='3rem' alt='img'/>
        </Flex>
        {/* <ClientSlider /> */}
      </Box>
    );
}

export default OverviewSection;
