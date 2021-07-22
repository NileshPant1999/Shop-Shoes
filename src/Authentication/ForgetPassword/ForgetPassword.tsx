import React from "react"
import { StyleSheet, View, Linking } from "react-native"
import { Button, Container } from "../../components"
import { Routes, StackNavigationProps } from "../../components/Routes"
import { Box, Text } from "../../components/Theme"
import Footer from "../components/Footer"
import TextInput from "../components/Form/TextInput"

function validateEmail(email: string) {
	const re =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	return re.test(String(email).toLowerCase())
}

const ForgetPassword = ({
	navigation,
}: StackNavigationProps<Routes, "ForgetPassword">) => {
	const footer = (
		<Footer
			title="Don't Work"
			action="Try Another Way"
			onPress={() => Linking.openURL("https://www.google.com/")}
		/>
	)

	return (
		<Container {...{ footer }}>
			<Box padding="xl" justifyContent="center" flex={1}>
				<Text variant="title1" textAlign="center" marginBottom="l">
					Forget Password ?
				</Text>
				<Text variant="body" marginBottom="l" textAlign="center">
					Enter the email address associated with your account
				</Text>
				<Box marginBottom="m">
					<TextInput
						icon="mail"
						placeholder="Enter your Email"
						validator={validateEmail}
					/>
				</Box>

				<Box alignItems="center" marginTop="m">
					<Button
						variant="primary"
						onPress={() => navigation.navigate("PasswordChange")}
						label="Reset Password"
					/>
				</Box>
			</Box>
		</Container>
	)
}

export default ForgetPassword

const styles = StyleSheet.create({})
