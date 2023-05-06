
import { Flex, Box, Text, Img, Input, Button } from '@chakra-ui/react'
import styled from 'styled-components'
import { IoEyeSharp } from 'react-icons/io5'
import { StyledButton } from './Login'


const Verify =()=>{
    return(
        <>
            <Flex justify={'center'} flexDir={{ base: 'column-reverse', lg: 'row'}}>
                <Box bgColor={'#fff'} p={{ base: '40px 25px', lg: '40px 100px' }} w='100%'>
                    <Img src={'/icon.svg'} alt='futa-icon' w='41px' h='41px' mx={{ base: 'auto', lg: '0' }} />
                    <Box 
                        className='archivo' my='20px' fontSize={'32px'} color='#1A1A1A'
                        textAlign={{ base: 'center', lg: 'left'}}
                    >
                        <Text as={'span'} fontWeight='500'>Verify Identification</Text>
                    </Box>
                    <Text color={'#8F8989'} className='inter' fontSize={'16px'} fontWeight='400' 
                    textAlign={{ base: 'center', lg: 'left'}}>
                        Please enter your Unique ID for verification
                    </Text>
                    <Box className='inter' my='20px'>
                        <Text fontWeight={'500'} fontSize='16px'>ID</Text>
                        <Input 
                            border={'1px solid #e8e8e8'} borderRadius='4px' placeholder='2015/1/54402CP'
                            p='16px' bg='#fafafa' h='56px' mt='10px'
                        />
                    </Box>
                    <StyledButton className='archivo'>Continue</StyledButton>
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


export default Verify