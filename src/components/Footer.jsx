import React from 'react';
import { Box, Text, Link, Image, Input, Flex } from '@chakra-ui/react'

const qLink = [
  {
    lname: 'Home',
    link: '/'
  },
  {
    lname: 'Terms and Conditions',
    link: '/'
  },
  {
    lname: 'Privacy Policy',
    link: '/'
  }
];
const servicess = [
  {
    lname: 'Web Development',
    link: '/'
  },
  {
    lname: 'App Development',
    link: '/'
  },
  {
    lname: 'SEO',
    link: '/'
  },
  {
    lname: 'Graphic Design',
    link: '/'
  },
  {
    lname: 'Digital Marketing',
    link: '/'
  }
];
const contactUs = [
  {
    lname: 'support@demoitsolutions.com',
    link: '/'
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
  return (
    <>
    <Box as='footer' py="20px" px={{base:'40px', lg:'38px'}} borderBlock="1px" borderColor="#d4d4d4">
      <Flex maxW={{lg:'1446px', base:'100%'}} mx='auto' h='max-content' py='2em' align='flex-start' justify="space-between" mt='20px' flexDir="column">
        <Image src='/logo.jpeg' h='3.5rem' w='max-content' objectFit='contain' alt='logo' mb="1rem" />
        <Box display="flex" flexWrap="wrap">
          <Flex w={{lg:'35%', base:'100%'}} flexDir='column' justify='start' fontSize='.8rem'>
            <Text fontSize='1.1rem' pe='1rem'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </Text>
            <Text fontWeight='700' fontSize='1rem' my={{lg:"1.8rem", base:'.8rem'}} color='#244395'>Get the Latest News & Update</Text>
            <Flex as='form' action="" justify="space-between" gap="10%" mb=".9rem">
              <Input type='email' w="70%" size="base" placeholder='Email' borderRadius='5px' p='.7rem' borderWidth='1px' />
              <Input w="30%" type='submit' size="base" value='Send' borderRadius='5px' border='0' bgColor='#244395' me="15px" color='white' fontWeight='500' />
            </Flex>
          </Flex>
          <Flex w={{lg:'20%', base:'40%'}}  flexDir='column' fontSize='1rem'>
            <Text mb=".6rem" fontWeight='700' fontSize='1rem' textTransform='uppercase' color='#244395'>Quick Links</Text>
            {qLink.map((ql, i) => {
              return <Link my='.1rem' color='#4d648a' textDecor='none' fontWeight='600' key={i} href={ql.link}>{ql.lname}</Link>
            })
            }
          </Flex>
          <Flex w={{lg:'20%', base:'55%'}} flexWrap="wrap" flexDir='column' fontSize='1rem'>
            <Text mb=".6rem" fontWeight='700' fontSize='1rem' textTransform='uppercase' color='#244395'>Our Services</Text>
            {servicess.map((ql, i) => {
              return <Link my='.1rem' color='#4d648a' textDecor='none' fontWeight='600' key={i} href={ql.link}>{ql.lname}</Link>
            })
            }
          </Flex>
          <Flex w={{lg:'20%', base:'100%'}} flexDir='column' fontSize='1rem'>
            <Text mb=".6rem" fontWeight='700' fontSize='1rem' textTransform='uppercase' color='#244395'>Contact Us</Text>
            {contactUs.map((ql, i) => {
              return <Link my='.1rem' color='#4d648a' textDecor='none' fontWeight='600' key={i} href={ql.link}>{ql.lname}</Link>
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
