import React, { useState } from "react"
import { StyleSheet, View } from "react-native"
import { Box, Text } from "../../../components/Theme"
import { Feather as Icon } from "@expo/vector-icons"
import { RectButton } from "react-native-gesture-handler"

interface CheckboxProps {
	label: string
}

const Checkbox = ({ label }: CheckboxProps) => {
	const [checked, setChecked] = useState(false)

	return (
		<RectButton
			onPress={() => setChecked((c) => !c)}
			style={{ justifyContent: "center", borderRadius: 20 }}
		>
			<Box flexDirection="row" alignItems="center">
				<Box
					marginRight="l"
					height={20}
					width={20}
					borderRadius="s"
					justifyContent="center"
					alignItems="center"
					borderWidth={1}
					borderColor="primary"
					backgroundColor={checked ? "primary" : "background"}
				>
					<Icon name="check" color="white" />
				</Box>
				<Text marginRight="xl" variant="button">
					{label}
				</Text>
			</Box>
		</RectButton>
	)
}

export default Checkbox

const styles = StyleSheet.create({})
