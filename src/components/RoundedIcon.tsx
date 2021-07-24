import React from "react"
import { StyleSheet, View } from "react-native"
import { Feather as Icon } from "@expo/vector-icons"
import { theme } from "."
import { Box, Text } from "./Theme"

interface RoundedIconProps {
	name: any
	size: number
	color: string
	backgroundColor: string
}

const RoundedIcon = ({
	name,
	size,
	color,
	backgroundColor,
}: RoundedIconProps) => {
	const iconSize = size * 0.8
	return (
		<Box
			height={size}
			width={size}
			borderRadius="m"
			justifyContent="center"
			alignItems="center"
			style={{ borderRadius: size / 2 }}
			{...{ backgroundColor }}
		>
			<Text style={{ height: iconSize, width: iconSize }}>
				<Icon
					color="white"
					size={iconSize}
					style={{ textAlign: "center" }}
					{...{ name }}
				/>
			</Text>
		</Box>
	)
}

export default RoundedIcon

const styles = StyleSheet.create({})
