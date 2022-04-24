import React from "react"
import { View, KeyboardAvoidingView, Platform } from "react-native"
import { Container, Button } from "../../components"
import SocialLogin from "../components/SocialLogin"
import { Box, Text } from "../../components/Theme"
import TextInput from "../components/Form/TextInput"
import Checkbox from "../components/Form/Checkbox"
import { useState } from "react"
import Footer from "../components/Footer"
import { Routes, StackNavigationProps } from "../../components/Routes"

function validateEmail(email: string) {
	const re =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	return re.test(String(email).toLowerCase())
}

function validatePassword(password: string) {
	if (password.length > 8) {
		return true
	}

	return false
}

const Login = ({ navigation }: StackNavigationProps<Routes, "Login">) => {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	const footer = (
		<Footer
			title="Don't have an account?"
			action="Sign Up Here"
			onPress={() => navigation.navigate("Signup")}
		/>
	)

	return (
		<Container pattern={0} {...{ footer }}>
			<Box padding="xl">
				<Text variant="title1" textAlign="center" marginBottom="l">
					Welcome Back
				</Text>
				<Text variant="body" marginBottom="l" textAlign="center">
					Use you credentials below and login to your account
				</Text>
				<Box marginBottom="m">
					<TextInput
						icon="mail"
						placeholder="Enter your Email"
						validator={validateEmail}
					/>
				</Box>
				<TextInput
					icon="lock"
					placeholder="Enter your Password"
					validator={validatePassword}
					secureTextEntry
				/>
				<Box flexDirection="row">
					<Checkbox label="Remember me" />
					<Button
						onPress={() => navigation.navigate("ForgetPassword")}
						variant="transparent"
					>
						<Text color="primary">Forget Password</Text>
					</Button>
				</Box>
				<Box alignItems="center" marginTop="m">
					<Button
						variant="primary"
						onPress={() => navigation.navigate('Home')}
						label="Log into your account"
					/>
				</Box>
			</Box>
		</Container>
	)
}

export default Login
