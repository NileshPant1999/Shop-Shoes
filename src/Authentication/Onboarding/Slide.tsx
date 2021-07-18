import React from 'react'
import { Image } from 'react-native';
import { StyleSheet } from 'react-native';
import { View, Text, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window');

export const SLIDE_HEIGHT = 0.61 * height;

const styles = StyleSheet.create({
    container: {
        width
    },
    titleContainer: {
      height: 100,
      justifyContent: 'center'  
    },
    title: {
        fontSize: 80,
        lineHeight: 80,
        fontFamily: "SFProText-Bold",
        color: "white",
        textAlign: 'center',
    },
    underlay: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
    },
    picture: {
        ...StyleSheet.absoluteFillObject,
        width: undefined,
        height: undefined,
        borderBottomRightRadius: 75
    }
})

interface SlideProps{
    label: string;
    right?: boolean;
    picture?: string;
}

const Slide = ({label, right, picture}: SlideProps) => {
    const transform = [
        { translateY: (SLIDE_HEIGHT-100) / 2 },
        { translateX: right ? width / 2 - 50 : -width / 2 + 50},
        { rotate: right ? "-90deg" : "90deg"}
    ]
    return (
        <View style={styles.container}>
            <View style={styles.underlay}>
                <Image  source = {picture as any} style={styles.picture} />
            </View>
            <View style={[styles.titleContainer, { transform }]}>
                <Text style={styles.title}>{label}</Text>
            </View>
            
        </View>
    )
}

export default Slide;
