import React from "react"
import { StyleSheet, View } from "react-native"
import { Feather as Icon } from "@expo/vector-icons"
import { Button, CloseButton, Container } from "../../components"
import { Routes, StackNavigationProps } from "../../components/Routes"
import { Box, Text } from "../../components/Theme"

const SIZE = 80
const PasswordChange = ({
	navigation,
}: StackNavigationProps<Routes, "Login">) => {
	return (
		<Container
			footer={
				<Box marginTop="m" flexDirection="row" justifyContent="center">
					<CloseButton onPress={() => navigation.pop()} />
				</Box>
			}
		>
			<Box flex={1} justifyContent="center" alignItems="center">
				<Box
					backgroundColor="primaryLight"
					justifyContent="center"
					alignItems="center"
					marginBottom="l"
					style={{
						height: SIZE,
						width: SIZE,
						borderRadius: SIZE / 2,
					}}
				>
					<Text color="primary" textAlign="center">
						<Icon size={32} name="check" />
					</Text>
				</Box>
				<Text variant="title1" textAlign="center" marginBottom="l">
					Password Changed
				</Text>
				<Text variant="body" marginBottom="l" textAlign="center">
					Enter the email address associated with your account
				</Text>
				<Box alignItems="center" marginTop="m">
					<Button
						variant="primary"
						onPress={() => navigation.navigate("Login")}
						label="Reset Password"
					/>
				</Box>
			</Box>
		</Container>
	)
}

export default PasswordChange

const styles = StyleSheet.create({})
