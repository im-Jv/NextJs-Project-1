'use client';
import Link from 'next/link';
import { Image, Flex, Box } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { usePathname } from 'next/navigation';
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
  const path = usePathname();
  return (
    <Box as='nav' px={{md:'8.5%', base:'40px'}} zIndex='999' position='fixed' top='0' w='100%' bgColor='white'>
      <Flex justify='space-between' py='1rem' align='center' maxW={{ lg: '1446px', base: '100%' }} mx='auto'>
        <Link href='/' >
          <Image src='/logo.jpeg' alt='iT Company' h='48.5px' objectFit='contain' />
        </Link>
        <Box cursor='pointer' display={{ md: 'none', base: 'block' }} onClick={() => setNavM(!navM)}>
          {!navM ? <HamburgerIcon fontSize='lg' /> : <CloseIcon /> }
        </Box>
        <Box className={navM ? 'respon' : ''} textDecor='none' fontSize={{ lg: '16px', base: '14px' }} onClick={() => setNavM(!navM)} w='80%' fontWeight='600' hideBelow="md">
          <Flex justify='space-between'>
            {topNav.map((lnk, i) => {
              let lnki = lnk.tLink;
              return (<Link className={path === lnki ? 'active' : ''} key={i} href={lnki}>{lnk.title}</Link>);
            })}
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}

export default Navbar;
