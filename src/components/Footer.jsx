'use client';

import Link from 'next/link';
import React from 'react';
import { Box, Text, Image, Input, Flex } from '@chakra-ui/react'
import { usePathname } from 'next/navigation';

const qLink = [
  {
    lname: 'Home',
    link: '/'
  },
  {
    lname: 'Terms and Conditions',
    link: '/terms-and-condition'
  },
  {
    lname: 'Privacy Policy',
    link: '/privacy-and-policy',
  }
];
const servicess = [
  {
    lname: 'Web Development',
    link: '/services/web-development'
  },
  {
    lname: 'App Development',
    link: '/services/app-development'
  },
  {
    lname: 'SEO',
    link: '/services/seo'
  },
  {
    lname: 'Graphic Design',
    link: '/services/graphic-designing'
  },
  {
    lname: 'Digital Marketing',
    link: '/services/digital-marketing'
  }
];
const contactUs = [
  {
    lname: 'support@demoitsolutions.com',
    link: ''
  },
  {
    lname: '+1(000)111-2222',
    link: ''
  },
  {
    lname: '+1(000)111-2222',
    link: ''
  },
  {
    lname: 'Corporation: DEMO IT SOLUTIONS,Dallas, USA',
    link: ''
  }
];

const Footer = () => {
  const path = usePathname();

  return (
    <>
      <Box id='bgMove' as='footer' mx='10px' py="20px" px={{ base: '40px', lg: '8%' }} borderBlock="1px" borderColor="text.100" bgPosition='center' bg='url(/assets/footer.svg)' bgRepeat='repeat' bgSize='contain' onMouseMove={() => {
        var bg = document.getElementById('bgMove');
        bg.addEventListener('mousemove', (e) => {
          bg.style.backgroundPositionX = (-e.pageX) / 10 + 'px';
          bg.style.backgroundPositionY = (-e.pageY) / 10 + 'px';
        })
      }}>
        <Flex maxW={{ lg: '1446px', base: '100%' }} mx='auto' h={{ lg: '360px', base: 'max-content' }} py='1rem' align='flex-start' justify="space-between" mt='20px' flexDir="column">
          <Image src='/logo.jpeg' h='3.5rem' w='max-content' objectFit='contain' alt='logo' mb="1rem" />
          <Box display="flex" flexWrap="wrap">
            <Flex w={{ lg: '35%', base: '100%' }} flexDir='column' justify='start' fontSize='.8rem'>
              <Text mb=".6rem" fontWeight='900' fontSize='20px' textTransform='uppercase' color='transparent' visibility='hidden'>About</Text>
              <Text fontFamily='text.100' fontSize={{ lg: '18px', base: '16px' }} pe='1rem'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </Text>
              <Text fontWeight='700' fontSize='1rem' my={{ lg: "1.8rem", base: '.8rem' }} color='#244395'>Get the Latest News & Update</Text>
              <Flex as='form' action="" justify="space-between" gap="10%" mb=".9rem">
                <Input type='email' w="70%" size="base" placeholder='Email' borderRadius='5px' p='.7rem' borderWidth='1px' />
                <Input w="30%" type='submit' size="base" value='Send' borderRadius='5px' border='0' bgColor='#244395' me="15px" color='white' fontWeight='500' />
              </Flex>
            </Flex>
            <Flex w={{ lg: '20%', base: '40%' }} flexDir='column' fontSize='1rem'>
              <Text mb=".6rem" fontWeight='900' fontSize='20px' textTransform='uppercase' color='primary.100' fontFamily='text.200'>Quick Links</Text>
              {qLink.map((ql, i) => {
                let lnki = ql.link;
                return <Link className={path === lnki ? 'active' : ''} key={i} href={ql.link}>{ql.lname}</Link>
              })
              }
            </Flex>
            <Flex w={{ lg: '20%', base: '55%' }} flexWrap="wrap" flexDir='column' fontSize='1rem'>
              <Text mb=".6rem" fontWeight='900' fontSize='20px' textTransform='uppercase' color='primary.100' fontFamily='text.200'>Our Services</Text>
              {servicess.map((ql, i) => {
                let lnki = ql.link;
                return <Link className={path === lnki ? 'active' : ''} key={i} href={ql.link}>{ql.lname}</Link>
              })
              }
            </Flex>
            <Flex w={{ lg: '20%', base: '100%' }} flexDir='column' fontSize='1rem'>
              <Text mb=".6rem" fontWeight='900' fontSize='20px' textTransform='uppercase' color='primary.100' fontFamily='text.200'>Contact Us</Text>
              {contactUs.map((ql, i) => {
                let lnki = ql.link;
                return <Link className={path === lnki ? 'active' : ''} key={i} href={ql.link}>{ql.lname}</Link>
              })
              }
            </Flex>
          </Box>
        </Flex>
      </Box>
      <Flex h="80px" align="center" justify="center">
        <Text>© 2023 DEMO IT SOLUTIONS. All Rights Reserved.</Text>
      </Flex>
    </>
  );
}

export default Footer;
