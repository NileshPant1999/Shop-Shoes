import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { Button } from "../../components"

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	subtitle: {
		fontFamily: "SemiBold",
		fontSize: 24,
		lineHeight: 30,
		marginBottom: 12,
		color: "#0c0D34",
		textAlign: "center",
	},
	description: {
		fontFamily: "Regular",
		fontSize: 16,
		lineHeight: 24,
		color: "#0C0D34",
		textAlign: "center",
		marginBottom: 40,
	},
})

interface SubslideProps {
	description: string
	subtitle: string
	last?: boolean
	onPress: any
}

const Subslide = ({ subtitle, description, last, onPress }: SubslideProps) => {
	return (
		<View style={styles.container}>
			<Text style={styles.subtitle}>{subtitle}</Text>
			<Text style={styles.description}>{description}</Text>
			<Button
				label={last ? "Let's Get Started" : "Next"}
				variant={last ? "primary" : "default"}
				{...{ onPress }}
			/>
		</View>
	)
}

export default Subslide
