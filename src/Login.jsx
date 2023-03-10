import { Flex, Box, Text, Img, Input, Button } from '@chakra-ui/react'
import styled from 'styled-components'
import { IoEyeSharp } from 'react-icons/io5'

const Login = () => {
    return (
        <>
            <Flex justify={'center'} flexDir={{ base: 'column-reverse', lg: 'row'}}>
                <Box bgColor={'#fff'} p={{ base: '40px 25px', lg: '40px 100px' }} w='100%'>
                    <Img src={'/icon.svg'} alt='futa-icon' w='41px' h='41px' mx={{ base: 'auto', lg: '0' }} />
                    <Box 
                        className='archivo' my='20px' fontSize={'32px'} color='#1A1A1A'
                        textAlign={{ base: 'center', lg: 'left'}}
                    >
                        <Text as={'span'} fontWeight='400'>Log in to </Text>
                        <Text as={'span'} fontWeight='600'>FUTA e-transcript</Text>
                    </Box>
                    <Text color={'#8F8989'} className='inter' fontSize={'16px'} fontWeight='400' 
                    textAlign={{ base: 'center', lg: 'left'}}>
                        Please enter your login informaton to continue.
                    </Text>
                    <Box className='inter' my='20px'>
                        <Text fontWeight={'500'} fontSize='16px'>Staff ID</Text>
                        <Input 
                            border={'1px solid #e8e8e8'} borderRadius='4px' placeholder='2015/1/54402CP'
                            p='16px' bg='#fafafa' h='56px' mt='10px'
                        />
                    </Box>
                    <Box className='inter' my='20px'>
                        <Text fontWeight={'500'} fontSize='16px'>Password</Text>
                        <Box pos='relative' mt='10px'>
                            <Input 
                                border={'1px solid #e8e8e8'} borderRadius='4px' placeholder='************'
                                p='16px' bg='#fafafa' h='56px'
                            />
                            <Button pos={'absolute'} right='0' top='10px' bg='none' _hover={{ bg: 'none' }}>
                                <IoEyeSharp color='#039EF4' size={'22px'} />
                            </Button>                            
                        </Box>
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

export const StyledButton = styled.button`
    width: 100%;
    padding-block: 12px;
    border-radius: 4px;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), #039EF4;;
    color: #fff;
    font-size: 20px;
    font-weight: 700;
    margin-top: 20px;
`

export default Login