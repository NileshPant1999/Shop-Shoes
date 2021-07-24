import React, { ReactNode } from "react"
import { StyleSheet, Image, Dimensions, Platform } from "react-native"
import { Box, theme } from "./Theme"
import { StatusBar } from "expo-status-bar"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import {
	KeyboardAwareFlatList,
	KeyboardAwareScrollView,
} from "react-native-keyboard-aware-scroll-view"
import Constants from "expo-constants"

interface ContainerProps {
	children: ReactNode
	footer: ReactNode
	pattern: 0 | 1 | 2
}

export const assets = [
	require("../Authentication/assets/pattern/bg1.png"),
	require("../Authentication/assets/pattern/bg2.png"),
	require("../Authentication/assets/pattern/bg3.png"),
] as const

const { width, height: wHeight } = Dimensions.get("window")
const aspectRatio = 750 / 1125

const height = width * aspectRatio

const Container = ({ children, footer, pattern }: ContainerProps) => {
	const insets = useSafeAreaInsets()
	const asset = assets[pattern]

	return (
		<KeyboardAwareScrollView scrollEnabled={false}>
			<Box
				height={
					wHeight +
					(Platform.OS === "android"
						? Constants.statusBarHeight + 50
						: 0)
				}
				backgroundColor="secondary"
			>
				<StatusBar style="light" />
				<Box backgroundColor="background">
					<Box
						borderBottomLeftRadius="xl"
						overflow="hidden"
						height={height * 0.61}
					>
						<Image
							source={asset}
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
						source={asset}
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
						{children}
					</Box>
				</Box>
				<Box backgroundColor="secondary">
					{footer}
					<Box height={insets.top} />
				</Box>
			</Box>
		</KeyboardAwareScrollView>
	)
}

export default Container

const styles = StyleSheet.create({})
