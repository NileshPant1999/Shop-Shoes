import React from 'react';
import {Dimensions, Image} from "react-native";

import {Box, theme, Text} from "../../components/Theme";
import { Button } from '../../components';
import { StackNavigationProps, Routes } from '../../components/Routes';

const { width } = Dimensions.get("window");

const picture = {
    src: require("../assets/9.png"),
    width: 730,
    height: 1095
}

export const assets = [picture.src];

const Welcome = ({navigation}: StackNavigationProps<Routes, "Welcome">) => {

    return (
        <Box flex={1} backgroundColor="background" >
            <Box flex={1} borderBottomRightRadius="xl" backgroundColor="background2" justifyContent="flex-start">
                <Image
                    source={picture.src}
                    style={{
                        marginTop: 50,
                        borderBottomRightRadius: 75,
                        width: width - theme.borderRadii.xl,
                        height: ((width - theme.borderRadii.xl) * picture.height) / picture.width
                    }}
                />
            </Box>
            <Box flex={1} borderTopLeftRadius="xl">
                <Box
                    backgroundColor="background2"
                    position="absolute"
                    top={0}
                    bottom={0}
                    left={0}
                    right={0}
                />
                <Box
                    backgroundColor="background"
                    borderTopLeftRadius="xl"
                    flex={1}
                    justifyContent="space-evenly"
                    alignItems="center"
                    padding="xl"
                >
                    <Text variant="title2">Let's get started</Text>
                    <Text variant="body" textAlign="center">Login to your account bellow or signup for amazing experience</Text>
                    <Button
                        variant="primary"
                        label="Have an account? Login"
                        onPress={() => navigation.navigate("Login")}
                    />
                    <Button label="Join us, it's free" onPress={() => navigation.navigate("Signup")} />
                    <Button
                        variant="transparent"
                        label="Forgot password?"
                        onPress={() => console.log("Forget Password")}
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default Welcome;