
import { Flex, Box, Text, Img, Input, Button, Center } from '@chakra-ui/react'
import styled from 'styled-components'
import { IoEyeSharp } from 'react-icons/io5'
import { StyledButton } from './Login'

const NotFound =()=>{
    return(
        <>
            <Flex justify={'center'} flexDir={{ base: 'column-reverse', lg: 'row'}}>
                <Box bgColor={'#fff'} p={{ base: '40px 25px', lg: '40px 100px' }} w='100%'  >
                    <Img src={'/icon.svg'} alt='futa-icon' w='41px' h='41px' mx={{ base: 'auto', lg: '0' }} display={{base: 'none', lg:'auto'}}/>
                    <Center>
                        <Img src={'/Quest.png'} alt='Quest' w='200px' h='250px' pt={'50px'} mx={{ base: 'auto', lg: '0' }} />
                    </Center>
                    <Text fontSize={'18px'} fontWeight={'bold'} textAlign={'Center'} m={'2px'}>Record Not Found</Text>
                    <Text fontSize={'14px'} textAlign={'Center'}>No record of your ID was found. Please try again.</Text>
                    <StyledButton className='archivo' background={'#F92020'}>Try Again</StyledButton>
                </Box>
                <Box 
                    bgImg={'/studimage.png'} bgColor='#039EF4' w='100%' h={{ base: '100%', lg: '100vh' }}
                    bgRepeat={'no-repeat'} bgPos='center' bgSize='cover'
                    pt={{ base: '100px', lg: '200px' }} pb={{ base: '100px', lg: '0' }} pl='60px'
                >
                    <Box color='#fff' fontSize={'14px'} className='archivo' fontWeight={'600'}>
                        <Text as='span' pr='20px'>WELCOME</Text>
                        <Text as='span'>TO</Text>
                    </Box>
                    <Text fontSize='40px' color={'#fff'} className='archivo' fontWeight={'700'}>
                        FUTA e-transcript
                    </Text>
                    <Box w='159px' border='3px solid #fff' borderRadius={'4px'} mb='15px'></Box>
                    <Text color={'#fff'} className='archivo' fontSize={'16px'} fontWeight='500'>
                        Upload transcript information to verify
                    </Text>
                </Box>
            </Flex>

        </>
    )
}

export default NotFound;