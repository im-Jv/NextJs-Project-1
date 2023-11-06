import React from 'react';
import Link from 'next/link';
import { Box, Flex, Image, Text } from '@chakra-ui/react'

const TimelineSect = ({ rvrs, sorce, slink, stitle, sDescp }) => {
  return (
    <Flex className='chngeDir' justify='start' flexDir={rvrs ? 'row-reverse' : 'row'}>
      <Box  mb="1rem" mt='10px' h='max-content' width={{ lg: "43%", base: '90%' }} borderRadius="sm" bg="#052240" p="20px">
        <Link href={slink}>
          <Text color="white" fontWeight='500' fontSize={{ md: "20px", base: '18px' }}>{stitle}</Text>
          <Text m="0" fontSize={{ md: "18px", base: '16px' }} fontWeight="400" color="white">{sDescp}</Text>
        </Link>
      </Box>
      <Box className='boxclr' transform='rotate(45deg)' mt='17px' me={rvrs ? { lg: '-15px', base: '0' } : { lg: '', base: '-15px' }} ms={rvrs ? '' : '-15px'} h="30px" w="30px" bgColor='#052240'></Box>
      <Flex justify="center" flexDir="column" align="center" h="auto" w="12%">
        <Box bgColor="text.200" w={{ lg: "70px", base: '50px' }} borderRadius="50%" p={{md:"1.3rem", base:'14px'}} >
          <Image src={sorce} objectFit="contain" alt='img' />
        </Box>
        <Box position="relative" h="100%" className='boogi' bgColor="black" width="3px"></Box>
      </Flex>
      <Box h="2rem" mx="" bgColor='transparent' hideBelow='lg'></Box>
      <Box h={{ lg: "150px", base: 'max-content' }} width="43%" hideBelow='lg'></Box>
    </Flex>
  );
}

export default TimelineSect;
