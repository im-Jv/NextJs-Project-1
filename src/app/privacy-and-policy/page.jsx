'use client';

import HeroSect from '@/components/HeroSect';
import { Text, Box, List, ListItem, ListIcon } from '@chakra-ui/react'
import { CheckCircleIcon } from '@chakra-ui/icons'

const tchero = {
  src: '/assets/privaypolicy.jpg',
  h: '380px',
  title: 'Privacy and Policy',
  align: 'center'
}

const point = [
  'If request for refund is made within 48 hours, you would be eligible for 100% refund.',
  'If request for refund is made between 48- 120 hours, you would be eligible 80% refund (less 10% service & processing fee).',
  'No refund request will be entertained after 120 hours of your initial design delivery, however since we believe in 100% customer satisfaction you`re encouraged to contact us in case of any concern.',
  'If customer is failed to provide briefing and requirements of his project within 7 days than amount he has paid is non-refundable.'
]

const point2 = [
  'Claim your refund specifying your concern by contacting us.',
  'We will try to resolve your concern by virtue of our revision policy immediately or else will email you a refund request approval from our refund department.',
];

const page = () => {
  return (
    <>
      <HeroSect {...tchero} />
      <Box px={{ base: '40px', lg: '8%' }} w='100%'>
        <Box as='section' maxW='1446px' mx='auto' py='3rem' fontSize={{ md: '20px', base: '16px' }}>
          <Text color='#2443A3' fontSize={{md:'18px',base:'14px'}}>
            Broadband World ensures 100% customer satisfaction. In case of any duplicate charge due to processing error, failing to fulfill any of your special designing requirements or not able to complete your required order as per the delivery policy, your complete project order amount will be refunded. Your refund would be processed as per the chart below:
          </Text>
          <Text as='p' my='.8rem' fontWeight='700' color='#2443A3'>All refund requests will be fulfilled as per the following arrangement:</Text>
          <List>
            {point.map((p, i) => {
              return (
                <ListItem key={i} display='flex' fontSize={{md:'18px',base:'14px'}} alignItems='start'>
                  <ListIcon fontSize={{md:'md', base:'sm'}} as={CheckCircleIcon} mt='.3rem' color='#244395' />
                  {p}
                </ListItem>
              )
            })}
          </List>
          <Text color='#2443A3' mt='15px' fontSize={{md:'18px',base:'14px'}}>
            All refund requests should be communicated to the support department. Broadband World, based on the violation of your user agreement reserves the right to approve/disapprove your request on an individual case to case basis. How to claim your refund.
          </Text>
          <Text as='p' my='.8rem' fontWeight='700' color='#2443A3'>To assure your refund request is approved, please make sure you meet the following requirements:</Text>
          <List></List>
          <List>
            {point2.map((p, i) => {
              return (
                <ListItem key={i} display='flex' fontSize={{md:'18px',base:'14px'}} alignItems='start'>
                  <ListIcon fontSize={{md:'md', base:'sm'}} as={CheckCircleIcon}  mt='.3rem' color='#244395' />
                  {p}
                </ListItem>
              )
            })}
          </List>
          <Text color='#2443A3' mt='15px' fontSize={{md:'18px',base:'14px'}}>
            After the refund, your design rights would be obtained by Broadband World and you would not be able to display any version of the design sent by company.
          </Text>
          <Text as='p' my='.8rem' fontWeight='700' color='#2443A3'>Let us also specify that:</Text>
          <List>
            <ListItem display='flex' fontSize={{md:'18px',base:'14px'}} alignItems='start'>
              <ListIcon fontSize={{md:'md', base:'sm'}} as={CheckCircleIcon} mt='.3rem' color='#244395' />
              Since the design rights would now be transferred to the company, you agree that you will have no right (direct or indirect) to use any response or other content, work product or media, nor will you have any ownership interest in or to the same.
            </ListItem>
          </List>
        </Box>
      </Box>
    </>
  )
}

export default page;
