import { Flex, Box, Text, Img, Input, Button } from '@chakra-ui/react'
import styled from 'styled-components'
import { IoEyeSharp } from 'react-icons/io5'
import { StyledButton } from './Login'


const Found =()=>{
    return(
        <>
            <Flex justify={'center'} flexDir={{ base: 'column-reverse', lg: 'row'}}>
                <Box bgColor={'#fff'} p={{ base: '40px 25px', lg: '40px 100px' }} w='100%'>
                    <Img src={'/icon.svg'} alt='futa-icon' w='41px' h='41px' mx={{ base: 'auto', lg: '0' }} />
                    <Box 
                        className='archivo' my='20px' fontSize={'32px'} color='#1A1A1A'
                        textAlign={{ base: 'center', lg: 'left'}}
                    >
                        <Text as={'span'} fontWeight='400'>Verification Complete </Text>
                    </Box>
                    <Text color={'#8F8989'} className='inter' fontSize={'16px'} fontWeight='400' 
                    textAlign={{ base: 'center', lg: 'left'}}>
                        Check to see your details below
                    </Text>
                    <Box>
                        <Box>
                            <Text color={'#8F8989'} className='inter' fontSize={'16px'} fontWeight='400' pt={'30px'} 
                            textAlign={{ base: 'left', lg: 'left'}}>
                                First Name
                            </Text>
                            <Text fontSize={'20px'} fontWeight={'400px'} 
                            textAlign={{ base: 'left', lg: 'left'}}>
                                Opeyemi
                            </Text>
                        </Box>

                        <Box>
                            <Text color={'#8F8989'} className='inter' fontSize={'16px'} fontWeight='400' pt={'30px'} 
                            textAlign={{ base: 'left', lg: 'left'}}>
                                Middle Name
                            </Text>
                            <Text fontSize={'20px'} fontWeight={'400px'}
                            textAlign={{ base: 'left', lg: 'left'}}>
                                Iyanuoluwa
                            </Text>
                        </Box>

                        <Box>
                            <Text color={'#8F8989'} className='inter' fontSize={'16px'} fontWeight='400' pt={'30px'} 
                            textAlign={{ base: 'left', lg: 'left'}}>
                                Last Name
                            </Text>
                            <Text fontSize={'20px'} fontWeight={'400px'}
                            textAlign={{ base: 'left', lg: 'left'}}>
                                Adeyemi
                            </Text>
                        </Box>

                        <Box>
                            <Text color={'#8F8989'} className='inter' fontSize={'16px'} fontWeight='400' pt={'30px'} 
                            textAlign={{ base: 'left', lg: 'left'}}>
                                Level
                            </Text>
                            <Text fontSize={'20px'} fontWeight={'400px'}
                            textAlign={{ base: 'left', lg: 'left'}}>
                                300
                            </Text>
                        </Box>

                        <Box>
                            <Text color={'#8F8989'} className='inter' fontSize={'16px'} fontWeight='400' pt={'30px'} 
                            textAlign={{ base: 'left', lg: 'left'}}>
                                Matric Number
                            </Text>
                            <Text fontSize={'20px'} fontWeight={'400px'}
                            textAlign={{ base: 'left', lg: 'left'}}>
                                2015/1/154402CP
                            </Text>
                        </Box>

                        <Box>
                            <Text color={'#8F8989'} className='inter' fontSize={'16px'} fontWeight='400' pt={'30px'} 
                            textAlign={{ base: 'left', lg: 'left'}}>
                                Department
                            </Text>
                            <Text fontSize={'20px'} fontWeight={'400px'}
                            textAlign={{ base: 'left', lg: 'left'}}>
                                Computer Engineering
                            </Text>
                        </Box>

                        <Box>
                            <Text color={'#8F8989'} className='inter' fontSize={'16px'} fontWeight='400' pt={'30px'} 
                            textAlign={{ base: 'left', lg: 'left'}}>
                                CGPA
                            </Text>
                            <Text fontSize={'20px'} fontWeight={'400px'}
                            textAlign={{ base: 'left', lg: 'left'}}>
                                3.29
                            </Text>
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


export default Found;