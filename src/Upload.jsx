import { Flex, Box, Text, Img, Input, Button } from '@chakra-ui/react'
import { BiImage } from 'react-icons/bi'
import { StyledButton } from './Login'

const Upload = () => {

    const inputBox = (label, placeholder) => {
        return <Box className='inter' my='20px'>
                    <Text fontWeight={'500'} fontSize='16px'>{label}</Text>
                    <Input 
                        border={'1px solid #e8e8e8'} borderRadius='4px' placeholder={placeholder}
                        p='16px' bg='#fafafa' h='56px' mt='10px'
                    />
                </Box>
    }

    return (
        <>
            <Flex justify={'center'} flexDir={{ base: 'column-reverse', lg: 'row'}}>
                <Box bgColor={'#fff'} p={{ base: '40px 25px', lg: '40px 100px' }} w='100%'>
                    <Img src={'/icon.svg'} alt='futa-icon' w='41px' h='41px' mx={{ base: 'auto', lg: '0' }} />
                    <Box 
                        className='archivo' my='20px' fontSize={'32px'} color='#1A1A1A'
                        textAlign={{ base: 'center', lg: 'left'}}
                    >
                        <Text as={'span'} fontWeight='400'>Upload </Text>
                        <Text as={'span'} fontWeight='600'>Transcript data</Text>
                    </Box>
                    <Text color={'#8F8989'} className='inter' fontSize={'16px'} fontWeight='400'
                    textAlign={{ base: 'center', lg: 'left'}}>
                        Please provide Transcript information below
                    </Text>
                    <Flex my='20px' gap='40px' align='center'>
                        <Box w='105px' h='105px' bgColor={'rgba(4, 9, 33, 0.04)'} borderRadius={'16px'}>
                            <Box 
                                w='96px' h='96px' borderRadius={'16px'} bgColor='rgba(4, 9, 33, 0.04)' m='4.5px'
                            >
                                <Button bg='none' _hover={{ bg: 'none' }} w='100px' my='28px' mx='auto'>
                                    <BiImage size={'60px'} color='rgba(4, 9, 33, 0.32)' />
                                </Button>
                            </Box>
                        </Box>
                        <Box>
                            <Text className='archivo' color='#081230' fsz='16px'>Update your image</Text>
                            <Flex mt='15px' align={'center'} gap='25px'>
                                <Box pos='relative' w='110px'>
                                    <Button 
                                        bg='none' _hover={{ bg: 'none' }} border='1px solid #4C8EFF' 
                                        borderRadius={'4px'} color='#4C8EFF' fontSize={'14px'}
                                    >
                                        Select Image
                                    </Button>
                                    <Input 
                                        type={'file'} pos='absolute' top='0' right='0' zIndex='10' 
                                        cursor={'pointer'} w='100%' h='100%' opacity={'0'}
                                    />
                                </Box>
                                <Button color='#FF4242' textDecor={'underline'} bg='none' _hover={{ bg: 'none' }} fontSize='14px'>
                                    Remove
                                </Button>
                            </Flex>
                        </Box>
                    </Flex>
                    <Box>
                        {inputBox('First name', 'John')}
                        {inputBox('Last name', 'Peter')}
                        {inputBox('Middle name', 'Akpan')}
                        {inputBox('Department', 'Computer Engineering')}
                        {inputBox('Matric Number', '2015/1/54402cp')}
                        {inputBox('CGPA', '3.39')}
                    </Box>
                    <StyledButton className='archivo'>Upload</StyledButton>
                </Box>
                <Box 
                    bgImg={'/studimage.png'} bgColor='#039EF4' w='100%'
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

export default Upload