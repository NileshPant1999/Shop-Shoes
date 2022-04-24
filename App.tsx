import 'react-native-gesture-handler';
import React from "react"
import { KeyboardAvoidingView, StyleSheet, Text, View } from "react-native"
import { ThemeProvider } from "@shopify/restyle"
import { SafeAreaProvider } from "react-native-safe-area-context"

import { HomeNavigator } from './src/Home'
import { LoadAssets, theme } from "./src/components"
import { StatusBar } from "react-native"
import { createStackNavigator } from "@react-navigation/stack"
import { Routes } from "./src/components/Routes"
import {
	Welcome,
	Onboarding,
	Login,
	Signup,
	ForgetPassword,
	assets as authenticationAssets,
} from "./src/Authentication"
import PasswordChange from "./src/Authentication/components/PasswordChange"

const fonts = {
	Bold: require("./assets/fonts/SFPro-Display-Bold.ttf"),
	SemiBold: require("./assets/fonts/SFPro-Display-Semibold.ttf"),
	Medium: require("./assets/fonts/SFPro-Display-Medium.ttf"),
	Regular: require("./assets/fonts/SFPro-Display-Regular.ttf"),
}


const assets = [...authenticationAssets]

const AuthencationStack = createStackNavigator<Routes>()

type AppStackRoutes = {
	Authentication: undefined;
	Home: undefined
};



const AppStack = createStackNavigator<AppStackRoutes>();

const AuthencationNavigator = () => {
	return (
		<AuthencationStack.Navigator headerMode={"none"}>
			<AuthencationStack.Screen
				name={"Onboarding"}
				component={Onboarding}
			/>
			<AuthencationStack.Screen name={"Welcome"} component={Welcome} />
			<AuthencationStack.Screen name={"Login"} component={Login} />
			<AuthencationStack.Screen name={"Signup"} component={Signup} />
			<AuthencationStack.Screen
				name={"ForgetPassword"}
				component={ForgetPassword}
			/>
			<AuthencationStack.Screen
				name={"PasswordChange"}
				component={PasswordChange}
			/>
		</AuthencationStack.Navigator>
	)
}


export default function App() {
	return (
		<ThemeProvider {...{ theme }}>
			<LoadAssets {...{ fonts, assets }}>
				<StatusBar hidden={false} />
				<SafeAreaProvider>
					<AppStack.Navigator headerMode='none'>
						<AppStack.Screen name='Authentication' component={AuthencationNavigator} />
						<AppStack.Screen name='Home' component={HomeNavigator}  />
					</AppStack.Navigator>
				</SafeAreaProvider>
			</LoadAssets>
		</ThemeProvider>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
})
