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

const Signup = ({ navigation }: StackNavigationProps<Routes, "Signup">) => {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	const footer = (
		<Footer
			title="Already Have an Account"
			action="Login Here"
			onPress={() => navigation.navigate("Login")}
		/>
	)

	return (
		<Container pattern={1} {...{ footer }}>
			<Box padding="xl">
				<Text variant="title1" textAlign="center" marginBottom="l">
					Create Account
				</Text>
				<Text variant="body" marginBottom="l" textAlign="center">
					Let us know what your name, email and your password
				</Text>
				<Box marginBottom="m">
					<TextInput
						icon="mail"
						placeholder="Enter your Email"
						validator={validateEmail}
					/>
				</Box>

				<Box marginBottom="m">
					<TextInput
						icon="lock"
						placeholder="Enter your Password"
						validator={validatePassword}
					/>
				</Box>

				<TextInput
					icon="lock"
					placeholder="Confirm your Password"
					validator={validatePassword}
					secureTextEntry
				/>

				<Box alignItems="center" marginTop="m">
					<Button
						variant="primary"
						onPress={() => console.log("hi")}
						label="Create your Account"
					/>
				</Box>
			</Box>
		</Container>
	)
}

export default Signup
