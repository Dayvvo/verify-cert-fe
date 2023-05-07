import { Flex, Box, Text, Img,  } from '@chakra-ui/react'
import {HiArrowNarrowLeft} from 'react-icons/hi';


const Found =({payload,goBack})=>{
    const data = 
    JSON.parse(payload?.data) || 
    {};


    console.log('payload data ',payload)
    const {firstName,lastName,middleName,department,matricNo,cgpa}  = data

    

    return(
        <>

            <Box bgColor={'#fff'} p={{ base: '40px 25px', lg: '40px 100px' }} w='100%'>
      

                <Img src={'/icon.svg'} alt='futa-icon' w='41px' h='41px' mx={{ base: 'auto', lg: '0' }} />
                <Flex my='1.5em' gap={'0.3em'} align={'center'}>

                    <HiArrowNarrowLeft  fontSize={'25px'} onClick={goBack} cursor={'pointer'} /> 

                    <Text fontSize={'16px'}> Back </Text>


                </Flex>
                <Box 
                    className='archivo' my='20px' fontSize={'32px'} color='#1A1A1A'
                    textAlign={{ base: 'center', lg: 'left'}}
                >
                    <Text as={'span'} fontWeight='400'>Verification Complete </Text>
                </Box>
                <Text color={'#8F8989'} className='inter' fontSize={'16px'} fontWeight='400' 
                textAlign={{ base: 'center', lg: 'left'}}>
                    Check to see user details below
                </Text>
                <Box>
                    <Box>
                        <Text color={'#8F8989'} className='inter' fontSize={'14px'} fontWeight='400' pt={'15px'} 
                        textAlign={{ base: 'left', lg: 'left'}}>
                            Name
                        </Text>
                        <Text fontSize={'15px'} fontWeight={'400px'} 
                        textAlign={{ base: 'left', lg: 'left'}}>
                           {lastName} {firstName} {middleName}
                        </Text>
                    </Box>


                    <Box>
                        <Text color={'#8F8989'} className='inter' fontSize={'14px'} fontWeight='400' pt={'15px'} 
                        textAlign={{ base: 'left', lg: 'left'}}>
                            Matric Number
                        </Text>
                        <Text fontSize={'15px'} fontWeight={'400px'}
                        textAlign={{ base: 'left', lg: 'left'}}>
                            {matricNo}
                        </Text>
                    </Box>

                    <Box>
                        <Text color={'#8F8989'} className='inter' fontSize={'14px'} fontWeight='400' pt={'15px'} 
                        textAlign={{ base: 'left', lg: 'left'}}>
                            Department
                        </Text>
                        <Text fontSize={'15px'} fontWeight={'400px'}
                        textAlign={{ base: 'left', lg: 'left'}}>
                            {department}
                        </Text>
                    </Box>

                    <Box>
                        <Text color={'#8F8989'} className='inter' fontSize={'14px'} fontWeight='400' pt={'15px'} 
                        textAlign={{ base: 'left', lg: 'left'}}>
                            CGPA
                        </Text>
                        <Text fontSize={'15px'} fontWeight={'400px'}
                        textAlign={{ base: 'left', lg: 'left'}}>
                            {cgpa}
                        </Text>
                    </Box>
                </Box>
                {/* <StyledButton className='archivo'>Continue</StyledButton> */}
            </Box>
        </>
    )
}


export default Found;