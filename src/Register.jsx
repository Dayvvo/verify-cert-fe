import useAxios from "./useAxios";
import { useToast } from "@chakra-ui/react";
import { StyledButton } from "./Login";



const Register  =()=>{

    const Axios = useAxios()

    const toast =  useToast();

    const createUser  =async()=>{
            try{
                let req =  await Axios.post('/signup',{
                    firstName:'Gabriel',
                    lastName:'Arome',
                    department:'Cyber Security',
                    staffId:'FUTA/2100',
                    email:'gabarmome@futa.edu.ng',
                    password:'futacys001'
                })

                let {status} = req;

               (status ===201) &&
               toast({
                title:'Success',
                description:'User created successfully',
                position:'top',
                status:'success'
               })

            }
            catch(err){
                console.log('an error occured',err);

                toast({
                    title:'Error',
                    description:'An error occured, please check browser console',
                    position:'top',
                    status:'error'
                })
    
            }

    }

    return(
        <>
            <StyledButton maxW='200px' onClick={createUser}>Click me</StyledButton>
        </>
    )
}

export default Register;