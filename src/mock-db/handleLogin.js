import { userCredentials } from "./credentials"


export const handleUserLogin = ({id,password })=>{


    const credentials = userCredentials;

    let userfound = false;
    let user = credentials.find(cred=>(
        cred.id ===id && cred.password===password
    ))

    if (user) {
        userfound = true;
    }

    
    return userfound;

}