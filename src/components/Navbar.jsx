'use client';

import { Link, Image, Flex, Box } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { useState } from 'react';


const topNav = [
  {
    title: 'Web Development',
    tLink: '/services/web-development'
  },
  {
    title: 'App Development',
    tLink: '/services/app-development'
  },
  {
    title: 'Digital Marketing',
    tLink: '/services/digital-marketing'
  },
  {
    title: 'SEO',
    tLink: '/services/seo'
  },
  {
    title: 'Graphic Designing',
    tLink: '/services/graphic-designing'
  },
];

const Navbar = () => {
  const [navM, setNavM] = useState();
  return (
    <Box as='nav' px='8%'>
      <Flex justify='space-between' py='1rem' align='center' maxW={{ lg: '1446px', base: '100%' }} mx='auto'>
        <Link href='/' me='8%'>
          <Image src='/logo.jpeg' alt='iT Company' h='42px' objectFit='contain' />
        </Link>
        <HamburgerIcon cursor='pointer' display={{ md: 'none', base: 'block' }} onClick={() => setNavM(!navM)} />
        <Box className={navM ? 'respon' : ''} fontSize='1rem' fontWeight='600' hideBelow="md">
          {topNav.map((lnk, index) => {
            return (<Link _hover={{ color: '#24a9e1' }} textDecor='none' key={index} fontSize={{ lg: '1rem', base: '.5rem' }} fontWeight='600' href={lnk.tLink} color='#4d648a' mx='1rem'>{lnk.title}</Link>);
          })}
        </Box>
      </Flex>
    </Box>
  );
}

export default Navbar;
