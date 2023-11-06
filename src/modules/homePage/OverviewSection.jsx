
import {Box,Flex,Text,Image} from '@chakra-ui/react';
import ClientSlider from '@/components/ClientSlider';

const OverviewSection = () => {
    return (
      <Box as='section' h='max-content' px={{lg:'8.5%', base:'40px'}}>
      <Flex my='4rem' maxW='1446px' align="center" justify="space-between" mx='auto' flexDir={{base:'column-reverse', md:'row'}}>
          <Box w={{md:'50%', base:'100%'}}>
            <Text fontSize={{md:'40px', base:'32px'}} mt={{md:'0', base:'1rem'}} color='primary.100' fontFamily='text.200' fontWeight='400'>
              Managed IT For Small To Midsize Businesses
            </Text>
            <Text fontSize={{md:'24px', base:'18px'}} color='link.100' fontFamily='text.100'>
              Preventing tech-induced headaches and data security threats isn’t your job—it’s ours. For over two decades, we’ve stepped in with managed solutions to provide businesses with a firm IT foundation to stand on. We’ll protect your business and your data, so all you’ll need to focus on is getting the job done.
            </Text>
          </Box>
          <Image src='/assets/sec2.jpeg' objectFit='contain' w={{md:'50%', base:'100%'}} ps={{md:"1rem", base:'0'}} ms={{md:'3rem', base:'0'}} alt='img'/>
        </Flex>
        <ClientSlider />
      </Box>
    );
}

export default OverviewSection;
