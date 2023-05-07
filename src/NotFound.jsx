
import { Flex, Box, Text, Img,  Center } from '@chakra-ui/react'
import { StyledButton } from './Login'
import {HiArrowNarrowLeft} from 'react-icons/hi';

const NotFound =({goBack})=>{
    
    return(
        <>
                <Box bgColor={'#fff'} p={{ base: '40px 25px', lg: '40px 100px' }} w='100%'  >
                    <Img src={'/icon.svg'} alt='futa-icon' w='41px' h='41px' mx={{ base: 'auto', lg: '0' }} display={{base: 'none', lg:'auto'}}/>
           
                    <Flex my='1.5em' gap={'0.3em'} align={'center'}>

                        <HiArrowNarrowLeft  fontSize={'25px'} onClick={goBack} cursor={'pointer'} /> 

                        <Text fontSize={'16px'}> Back </Text>


                    </Flex>

                    <Center>
                        <Img src={'/Quest.png'} alt='Quest' w='200px' h='250px' pt={'50px'} mx={{ base: 'auto', lg: '0' }} />
                    </Center>
                    <Text mt='1em' fontSize={'18px'} fontWeight={'bold'} textAlign={'Center'}>Record Not Found</Text>
                    <Text fontSize={'14px'} textAlign={'Center'}>No record of your ID was found. Please try again.</Text>
                    {/* <StyledButton className='archivo' background={'#F92020'}>Try Again</StyledButton> */}
                </Box>

        </>
    )
}

export default NotFound;