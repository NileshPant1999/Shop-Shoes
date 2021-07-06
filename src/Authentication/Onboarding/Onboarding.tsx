import React, { useRef } from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Animated, { multiply }  from 'react-native-reanimated'
import {interpolateColor, onScrollEvent, useScrollHandler, useValue} from 'react-native-redash'
import Slide from './Slide'
import Subslide from './Subslide'

const { width, height } = Dimensions.get("window")

const BORDER_RADIUS = 75;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    slider: {
        height: 0.61 * height,
        backgroundColor: "cyan",
        borderBottomRightRadius: BORDER_RADIUS
    },
    footer: {
        flex: 1,
    },
    footerContent: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "white",
        borderTopLeftRadius: BORDER_RADIUS

    }
})

export default function Onboarding() {

    const scroll =  useRef<Animated.ScrollView>(null);
    const {scrollHandler, x} = useScrollHandler();
    const onScroll = onScrollEvent({x});

    const slides = [
        {label: "Relaxed", subtitle:"Find Your Outfits", description: "Confused about your outfit?Don't worry! Find the best outfit here!", picture: 'https://i.pinimg.com/originals/9c/c3/e7/9cc3e7a352aab4388f37bcb598bebeed.jpg', color: "#BFEAF5"},
        {label: "Playful", subtitle:"Hear it First, Wear it First", description: "Hates the Shoes in your wardrobe? Explore hundereds of outfits.", picture: 'https://www.acmodasi.in/rate/casting/80682-1531501978-426408.jpg', color: "#BEECC4"},
        {label: "Excentric", subtitle:"Find Your Outfits", description: "Confused about your outfit?Don't worry! Find the best outfit here!", picture: 'https://castyou-website.sgp1.digitaloceanspaces.com/2019/03/Aishwarya-Sankar.jpg', color: "#FFE4D9"},
        {label: "Excentric", subtitle:"Hear it First, Wear it First", description: "Hates the Shoes in your wardrobe? Explore hundereds of outfits.", picture: 'https://castyou-website.sgp1.digitaloceanspaces.com/2019/03/Aishwarya-Sankar.jpg', color: "#FFDDDD"},
    ]

    const backgroundColor = interpolateColor(x, {
        inputRange: slides.map((_,i) => i*width),
        outputRange: slides.map(slide => slide.color),
    })

    
    return (
        <View style={styles.container}>
            <Animated.View 
                style={[styles.slider, { backgroundColor: backgroundColor }]}
                >
                <Animated.ScrollView 
                    ref={scroll}
                    horizontal 
                    snapToInterval={width} 
                    decelerationRate="fast" 
                    showsHorizontalScrollIndicator={false} 
                    bounces={false}
                    {...scrollHandler}
                    >
                        {slides.map(({ label, picture }, index) => (
                            <Slide key={index} right={!(index % 2)} {...{ label, picture }} />
                        ))}
                </Animated.ScrollView>
            </Animated.View>
            <Animated.View style={styles.footer}>
                <View style={{ ...StyleSheet.absoluteFillObject}} />
                <Animated.View style={[styles.footerContent, {width: width * slides.length, flex: 1, transform: [{translateX: multiply(x, -1)}]}]}>
                    {slides.map(({ subtitle, description }, index) => (
                        <Subslide
                            key={index} 
                            onPress={() => {
                                if (scroll.current){
                                    scroll.current
                                    .getNode()
                                    .scrollTo({x: width * (index+1), animated: true})
                                }
                            }}
                            last={index === (slides.length - 1)} 
                            {...{ subtitle, description}}
                            
                            />
                    ))}
                </Animated.View>
            </Animated.View>  
        </View>
    )
}
