'use client';

import { Link, Image, Flex, Box } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';


const topNav = [
  {
    title: 'Web Development',
    tLink: '/'
  },
  {
    title: 'App Development',
    tLink: '/'
  },
  {
    title: 'Digital Marketing',
    tLink: '/'
  },
  {
    title: 'SEO',
    tLink: '/'
  },
  {
    title: 'Graphic Designing',
    tLink: '/'
  },
];

const Navbar = () => {
  return (
    <Box as='nav' px='8%'>
      <Flex justify='space-between' py='1rem' align='center' maxW={{lg:'1446px', base:'100%'}} mx='auto'>
        <Link href='/' me='8%'>
          <Image src='/logo.jpeg' alt='iT Company' h='42px' objectFit='contain' />
        </Link>
        <HamburgerIcon display={{md:'none', base:'block'}} />
        <Box fontSize='1rem' fontWeight='600' hideBelow="md">
        {topNav.map((lnk, index) => {
            return (<Link _hover={{color:'#24a9e1'}} textDecor='none' key={index} fontSize={{ lg: '1rem', base: '.5rem' }} fontWeight='600' href={lnk.tLink} color='#4d648a' mx='1rem'>{lnk.title}</Link>);
          })}
        </Box>
      </Flex>
    </Box>
  );
}

export default Navbar;
