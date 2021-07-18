import React, { ReactNode } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { theme } from './Theme'

interface ButtonProps {
    variant: "default" | "primary" | "transparent";
    label?: string,
    onPress: any,
    children ?: ReactNode
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 25,
        height: 50,
        width: 245,
        justifyContent: 'center'
    },
    label: {
        fontFamily: 'Regular',
        fontSize: 15,
        textAlign: 'center'
    }
})

const Button = ({variant,label, onPress, children}: ButtonProps) => {
    const backgroundColor =
    variant === "primary"
        ? theme.colors.primary
        : variant === "transparent"
        ? "transparent"
        : theme.colors.background2
const color =
    variant === "primary" ? theme.colors.background : theme.colors.secondary
    return (
        <View>
            <RectButton 
                style={[
                    styles.container, 
                    { backgroundColor: backgroundColor as any}]} 
                    {...{ onPress }}>
                        {children ? 
                        (
                            children
                        )  : (
                        <Text style={[styles.label, {color}]}>{label}</Text>
                        )
                    }
            </RectButton>
        </View>
    )
}

Button.defaultProps = {variant: "default"}

export default Button
