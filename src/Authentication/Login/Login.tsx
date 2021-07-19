import React from 'react'
import { View, KeyboardAvoidingView,Platform } from 'react-native'
import { Container, Button } from '../../components'
import SocialLogin from '../components/SocialLogin'
import { Box, Text } from '../../components/Theme'
import TextInput from '../components/Form/TextInput'

function validateEmail(email: string) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validatePassword(password: string) {
    if (password.length > 8){
        return true;
    }
    
    return false;
}

const Login = () => {
    const footer = (
        <> 
           <SocialLogin />
           <Box alignItems='center'>
           <Button variant="transparent" onPress={() => alert("signup")}>
               <Box flexDirection="row" justifyContent="center">
               <Text variant="button" color='background'>
                    Don't Have an Account?
                </Text>
                <Text marginLeft='s' variant="button" color="primary">
                    Signup Here
                </Text>
               </Box>
            
            </Button>
           </Box>
            
        </>
    )
    return (
        
        <Container { ...{footer}} >
        
        <Box padding="xl">
            <Text variant="title1" textAlign='center' marginBottom='l'>Welcome Back</Text>
            <Text variant="body" marginBottom="l" textAlign="center">Use you credentials below and login to your account</Text>
            <Box marginBottom="m">
                <TextInput icon="mail" placeholder="Enter your Email" validator={validateEmail}  />
            </Box>
            <TextInput icon="lock" placeholder="Enter your Password" validator={validatePassword} />

        </Box>  
        </Container>
        
        
    )
}

export default Login
