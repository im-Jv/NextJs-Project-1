import React from 'react';
import { Box, Flex, Image, Link, Progress, Text } from '@chakra-ui/react'

const TimelineSect = ({ rvrs, sorce, slink, stitle, sDescp }) => {
  return (
      <Flex className='chngeDir' justify='start' flexDir={rvrs ? 'row-reverse' : 'row'}>
        <Link href={slink} mb="1rem" h={{lg:"150px", base:'max-content'}} width={{lg:"43%", base:'90%'}} borderRadius="md" bg="linear-gradient(45deg, #052240, #333333)" p="1.2rem">
          <Text color="white" fontSize={{md:"1.18rem", base:'1rem'}}>{stitle}</Text>
          <Text m="0" fontSize={{md:".9rem", base:'.7rem'}} fontWeight="500" color="white">{sDescp}</Text>
        </Link>
        <Box className='boxclr' h="20px" w={{md:"2%", base:'25px'}} mx="2px" bgColor={rvrs ? '#052240':"#333333"}></Box>
        <Flex justify="center" flexDir="column" align="center" h="auto" w="10%">
          <Box bgColor="lightgrey" w={{md:"70px", base:'50px'}} borderRadius="50%" p="15px" >
            <Image src={sorce} objectFit="contain" alt='img' />
          </Box>
          <Box position="relative" h="100%" className='boogi' bgColor="black" width="3px"></Box>
        </Flex>
        <Box h="2rem" w="2%" mx="2px" bgColor='transparent' display={{lg:'block',base:'none'}}></Box>
        <Box h={{md:"150px", base:'max-content'}} width="43%"  display={{lg:'block',base:'none'}}></Box>
      </Flex>
  );
}

export default TimelineSect;
