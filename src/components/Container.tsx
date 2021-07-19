import React, { ReactNode } from "react"
import {
	StyleSheet,
	Text,
	View,
	Image,
	Dimensions,
	KeyboardAvoidingView,
	KeyboardAvoidingViewBase,
} from "react-native"
import { Box, theme } from "./Theme"
import { StatusBar } from "expo-status-bar"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import {
	KeyboardAwareFlatList,
	KeyboardAwareScrollView,
} from "react-native-keyboard-aware-scroll-view"

interface ContainerProps {
	children: ReactNode
	footer: ReactNode
}

export const assets = [require("../Authentication/assets/pattern/bg1.png")]
const { width } = Dimensions.get("window")
const aspectRatio = 750 / 1125

const height = width * aspectRatio

const Container = ({ children, footer }: ContainerProps) => {
	const insets = useSafeAreaInsets()

	return (
		<Box flex={1} backgroundColor="secondary">
			<Box backgroundColor="background">
				<Box
					borderBottomLeftRadius="xl"
					overflow="hidden"
					height={height * 0.61}
				>
					<Image
						source={assets[0]}
						style={{
							width,
							height,
							borderBottomLeftRadius: theme.borderRadii.xl,
						}}
					/>
				</Box>
			</Box>

			<Box flex={1} overflow="hidden">
				<Image
					source={assets[0]}
					style={{
						...StyleSheet.absoluteFillObject,
						width,
						height,
						top: -height * 0.61,
					}}
				/>
				<Box
					borderRadius="xl"
					borderTopLeftRadius={0}
					backgroundColor="background"
					flex={1}
				>
					<KeyboardAwareScrollView>
						{children}
					</KeyboardAwareScrollView>
				</Box>
			</Box>
			<Box backgroundColor="secondary">
				{footer}
				<Box height={insets.top} />
			</Box>
		</Box>
	)
}

export default Container

const styles = StyleSheet.create({})
