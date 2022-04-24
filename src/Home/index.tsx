import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import { View } from "react-native";
import { Text } from "react-native-svg";
import OutfitIdeas from "./OutfitIdeas";

const Drawer = createDrawerNavigator()

export const HomeNavigator = () => (
    <Drawer.Navigator>
        <Drawer.Screen name='sdsfddsfsd' component={<OutfitIdeas />} />
    </Drawer.Navigator>
)
